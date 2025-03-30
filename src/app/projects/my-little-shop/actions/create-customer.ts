"use server";

import { z } from "zod"
import { prismaShop } from "../lib/shop-db"
import { newCustomerSchema } from "../lib/customer_validate_schema";

export const createCustomer = async (values: z.infer<typeof newCustomerSchema>, userId: string) => {

    try {
        const { data, success } = newCustomerSchema.safeParse(values);

        if (!success) {
            return {
                error: 'Invalid Data'
            }
        }
        await prismaShop.customer.create({
            data: {
                name: data.name,
                userId: userId
            }
        })
        return { success: true };

    } catch (error) {
        if (error instanceof Error) {
            return { error: error.message }
        }
        else {
            return { error: 'error 505' };
        }
    }

}