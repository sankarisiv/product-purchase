import mongoose from "mongoose";
const schema = new mongoose.Schema({
productName:{
    type:String
},
productPrice:{
    type:Number
},
buyerName:{
    type:String
},
buyerPhNo:{
    type:Number
},
buyingQuantity:{
    type:Number
},
broughtAt:{
    type:Date,
    default:Date.now
}
},
{
    timestamps:true

})
export const purchaseModel = mongoose.model("purchase",schema)


