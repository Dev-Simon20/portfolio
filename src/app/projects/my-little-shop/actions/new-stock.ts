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
      await prismaShop.stock.create({
         data: {
            purchasePrice: data.purchasePrice,
            quantity: data.quantity,
            productId: data.productId,
         },
      });
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
