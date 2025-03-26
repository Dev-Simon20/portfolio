import { date, number, object, string, z } from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];


export const NewProductValidateSchema = object({
    name: string({ required_error: "Name is required" })
        .min(1, "Email is required"),
    description: string().optional(),
    purchase_price: number({ required_error: "Purchase price is required" }).positive("Purchase price is only positive")
        .min(0.1, "Puchase price minimun is 0.1"),
    sale_price: number({ required_error: "Sale price is required" }).positive("Sale price is only positive")
        .min(0.1, "Sale price minimun is 0.1"),
    image: z.any({required_error:"Image is required"})
        .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
        .refine(
            (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),
    quantity:number({required_error:"Quantity is required"}).positive("Only positive").min(1).int("Only integers")
})