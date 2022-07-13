import { productModel } from "./model";
import { Request, Response } from "express"


export const contact = async (req: Request, res: Response) => {

    const Quantity = 0
    const obj={
        productName:req.body.productName,
        productPrice:req.body.productPrice,
        importQuantity:req.body.importQuantity,
        saledQuantity:Quantity,
        remainigQuantity:req.body.remainigQuantity
    }
    const data = new productModel(obj)

    await data.save()
    res.send(data)
    console.log(data)
}


