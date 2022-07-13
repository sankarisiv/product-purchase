import mongoose from "mongoose";

export interface IProduct{
    productName: string,
    productPrice:number,
    importQuantity: number,
    remainigQuantity: number,
    saledQuantity: number,
    importTime:Date,
    statusHistory: [
        {
            productName: string,
            productPrice: number,
            buyerName:string,
            status:string,
            buyerPhNo: number,
            boughtQuantity: number,
            beforeBuying:number,
            afterBuying:number

        }
    ]
}

const schema = new mongoose.Schema<IProduct>({
    productName: {
        type: String
    },
    productPrice: {
        type: Number
    },
    importQuantity: {
        type: Number
    },
    remainigQuantity: {
        type: Number
    },
    saledQuantity: {
        type: Number
    },
    importTime: {
        type: Date,
        default: Date.now
    },
    statusHistory: [
        {
            productName: {
                type: String
            },
            productPrice: {
                type: Number
            },
            status:{
                type:String,
                enum:["pending","delivered"],
                default:("delivered")
            },
            buyerName: {
                type: String
            },
            buyerPhNo: {
                type: Number
            },
            boughtQuantity: {
                type: Number
            },
            beforeBuying: {
                type: Number
            },
            afterBuying: {
                type: Number
            },

        }
    ]
},
    {
        timestamps: true

    })
export const productModel = mongoose.model("product", schema)

