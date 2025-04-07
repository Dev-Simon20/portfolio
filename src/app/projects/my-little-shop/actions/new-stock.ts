"use server";

import { z } from "zod";
import { NewStockValidateSchema } from "../lib/new_stock_validate_schema";
import { prismaShop } from "../lib/shop-db";

export const createNewStock = async (
   values: z.infer<typeof NewStockValidateSchema>
) => {
   const { data, success } = NewStockValidateSchema.safeParse(values);
   if (!success) {
      return {
         error: "Invalid Data",
      };
   }
   try {
      await prismaShop.$transaction(async(tx)=>{
         await tx.stock.create({
            data: {
               purchasePrice: data.purchasePrice,
               quantity: data.quantity,
               productId: data.productId,
            },
         });
         await tx.product.update({
            where:{
               id:data.productId
            },
            data:{
               currentStock:{
                  increment:data.quantity
               }
            }
         })
      }) 
      
      
      return{
         status:'El stock fue actualizado con exito'
      }
   } catch (error) {
      if (error instanceof Error) {
         return {
            error: error.message,
         };
      }
      return {
         error: "Server error 505",
      };
   }
};
