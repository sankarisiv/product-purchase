import { RequestHandler } from "express";
import { purchaseModel } from "./model"
import { productModel } from "../product/model"

export const contact1: RequestHandler = async (req, res) => {
    const found = await productModel.findOne({ productName: req.body.productName, productPrice: req.body.productPrice })
    const data = new purchaseModel(req.body)

    if (found) {
        let lastcount = Number(found.remainigQuantity)
        let total = Number(found.importQuantity)
        if (lastcount >= req.body.buyingQuantity) {
            found.remainigQuantity = lastcount - Number(req.body.buyingQuantity)
            found.saledQuantity = total - Number(found.remainigQuantity)
            const obj = {
                productName: req.body.productName,
                productPrice: req.body.productPrice,
                buyerName: req.body.buyerName,
                buyerPhNo: req.body.buyerPhNo,
                boughtQuantity: req.body.buyingQuantity,
                beforeBuying: lastcount,
                afterBuying: found.remainigQuantity,
                status:"delivered"
            }
            found?.statusHistory?.push(obj)
            await found.save()
            await data.save()
            res.send(data)
        }else{
            res.send("insufficient quantity")
        }
    }else{
        res.send("product not available..")
    }
}