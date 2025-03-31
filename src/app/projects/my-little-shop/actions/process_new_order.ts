"use server";

import { z } from "zod";
import { saleFormSchema } from "../lib/order_validate_schema";
import { prismaShop } from "../lib/shop-db";
import { revalidatePath } from "next/cache";

export const procesNewOrder = async (
   values: z.infer<typeof saleFormSchema>,
   id: string
) => {
   try {
      const { data, success } = saleFormSchema.safeParse(values);
      if (!success) {
         return {
            error: "Invalid Data",
         };
      }
      await prismaShop.$transaction(async (tx) => {
         const order = await tx.order.create({
            data: {
               total: data.total,
               paymentType: data.paymentType,
               status: data.statusPaid,
               customerId: data.client.id,
               userId: id,
            },
         });

         for (const p of data.products ?? []) {
            await tx.orderItem.create({
               data: {
                  orderId: order.id,
                  productId: p.id,
                  quantity: p.quantity,
               },
            });

            const productToUpdate = await tx.product.findUnique({
               where: { id: p.id },
            });

            if (!productToUpdate) {
               throw new Error("Producto no existe");
            }

            if (productToUpdate.currentStock < p.quantity) {
               throw new Error("La cantidad excede al stock");
            }

            const newQuantity = productToUpdate.currentStock - p.quantity;

            await tx.product.update({
               where: { id: p.id },
               data: { currentStock: newQuantity },
            });
         }
      });
      revalidatePath("/projects/my-little-shop/dashboard/orders");
      return { success: true };
   } catch (error) {
      if (error instanceof Error) {
         return { error: error.message };
      } else {
         return { error: "error 505" };
      }
   }
};
