"use server";
import { prismaShop } from "../lib/shop-db";
import { ProductAll } from "../types/product_all_information";

export const getProduct = async (id: number, userId: string) => {
   try {
      if (!id) {
         return {
            error: "invalidData",
         };
      }
      const product:ProductAll|null = await prismaShop.product.findUnique({
         where: {
            id: id,
            userId: userId,
         },
         include: {
            stocks: true,
            orderItems: {
               include: {
                  order: {
                     include:{
                        customer:true
                     }
                  }
               },
            },
         },
      });
      if (!product) {
         return {
            error: "Product dont exist",
         };
      }
      return product;
   } catch (error) {
      if (error instanceof Error) {
         return { error: error.message };
      }
      return { error: "Error Unexpected.Mls" };
   }
};
