import { number, object, string } from "zod";

export const ProducUpdateSchema = object({
   id_product: number().positive(),
   id_user: string(),
   name: string({ required_error: "Name is required" }).min(
      3,
      "Minimun Name is 3 chatacters"
   ),
   description: string().optional(),
   sale_price: number({ required_error: "Sale price is required" })
      .positive("Sale price is only positive")
      .min(0.1, "Sale price minimun is 0.1"),
   image: string({ required_error: "The image is required" }),
});
