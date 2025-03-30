"use server";

import { Customer } from "../(app)/(protected)/dashboard/customers/page";
import { prismaShop } from "../lib/shop-db";

export const getCustomers = async (userId: string): Promise<Customer[] | null> => {
  try {
    const customers = await prismaShop.customer.findMany({
      where: {
        userId: userId,
      },
    });

    return customers; // Aseguramos que la función devuelva los datos
  } catch (error) {
    console.error("Error fetching customers:", error);
    return null; // Retornamos null en caso de error
  }
};
