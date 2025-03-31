"use server";

import { Customer } from "../types/customer";
import { prismaShop } from "../lib/shop-db";
import { Order } from "../types/order";

export const getOrders = async (userId: string): Promise<Order[] | null> => {
  try {
    const orders:Order[]=await prismaShop.order.findMany({
        where:{
           userId:userId
        },
        include:{
           customer:true
        }
     })

    return orders; // Aseguramos que la función devuelva los datos
  } catch (error) {
    console.error("Error fetching orders:", error);
    return null; // Retornamos null en caso de error
  }
};
