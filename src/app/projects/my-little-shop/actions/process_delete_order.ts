"use server";

import { revalidatePath } from "next/cache";
import { prismaShop } from "../lib/shop-db";

export const processDeleteOrder = async (id_order: number, id_user: string) => {
   try {
      const order = await prismaShop.order.findUnique({
         where: {
            id: id_order,
            userId: id_user,
         },
         include: {
            orderItems: true,
         },
      });
      if (!order) {
         throw new Error("The order dont exist");
      }
      await prismaShop.$transaction(async (tx) => {
         // regresa el stock a los productos
         for (const orderItem of order.orderItems ?? []) {
            await tx.product.update({
               where: {
                  id: orderItem.productId,
               },
               data: {
                  currentStock: {
                     increment: orderItem.quantity,
                  },
               },
            });
         }
         // procede a eliminar los items productos asociado a la orden
         await tx.orderItem.deleteMany({
            where: {
               orderId: order.id,
            },
         });
         await tx.order.delete({
            where:{
                id:order.id
            }
         })
      });
    
      revalidatePath("/projects/my-little-shop/dashboard/orders");
      
      return { sucess: true };
   } catch (error) {
      if (error instanceof Error) {
         return { error: error.message };
      }
      return { error: "Error Unexpected.Mls" };
   }
};
