"use server";

import { z } from "zod";
import { ProducUpdateSchema } from "../lib/product_update_schema";
import { error } from "console";
import { prismaShop } from "../lib/shop-db";

export const updateProduct = async (values: z.infer<typeof ProducUpdateSchema>) => {
   try {
      const { data, success } = ProducUpdateSchema.safeParse(values);
      if (!success) {
         return {
            error: "Invalid Data",
         };
      }
      await prismaShop.product.update({
         where: {
            id: data.id_product,
            userId: data.id_user,
         },
         data: {
            name: data.name,
            salePrice: data.sale_price,
            description: data.description,
            image: data.image,
         },
      });
      return { success: true };
   } catch (error) {
      if (error instanceof Error) {
         return { error: error.message };
      } else {
         return { error: "error 505" };
      }
   }
};
