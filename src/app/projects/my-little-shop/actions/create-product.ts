"use server";

import { number, object, string, z } from "zod";
import { prismaShop } from "../lib/shop-db";
import { NewProductValidateSchema } from "../lib/product_validate_schema";
const NewProductValidateSchemaBackend = object({
    name: string({ required_error: "Name is required" })
        .min(1, "Email is required"),
    description: string().optional(),
    purchase_price: number({ required_error: "Purchase price is required" }).positive("Purchase price is only positive")
        .min(0.1, "Puchase price minimun is 0.1"),
    sale_price: number({ required_error: "Sale price is required" }).positive("Sale price is only positive")
        .min(0.1, "Sale price minimun is 0.1"),
    quantity:number({required_error:"Quantity is required"}).positive("Only positive").min(1).int("Only integers")
})

export const createProduct = async (
    values: z.infer<typeof NewProductValidateSchema>,
    url: string,
    id: string
) => {
    try {
        const { data, success } = NewProductValidateSchemaBackend.safeParse(values);
        if (!success) {
            return {
                error: "Invalid data",
            };
        }
        await prismaShop.$transaction(async (tx) => {
            const product = await tx.product.create({
                data: {
                    userId: id,
                    name: data.name,
                    description: data.description,
                    purchasePrice: data.purchase_price,
                    salePrice: data.sale_price,
                    image: url,
                    currentStock: data.quantity,
                },

            });
            await tx.stock.create({
                data: {
                    productId: product.id,
                    quantity: product.currentStock
                }
            })
            return product;
        });
        return { success: true };
    } catch (error) {
        return { error: 'error 505' };

    }

};
