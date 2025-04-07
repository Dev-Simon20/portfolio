import { number, z } from "zod";


export const NewStockValidateSchema=z.object({
    productId:number({required_error:'Teh product is required'}).positive('The id product is invalid'),
    quantity:number({required_error:"Quantity is required"}).positive("Only positive").min(1).int("Only integers"),
    purchasePrice:number({required_error:'The purchase price is required'}).positive('Purchase price is only positive').min(1,"Purchase price minimun is 0.5")
})

