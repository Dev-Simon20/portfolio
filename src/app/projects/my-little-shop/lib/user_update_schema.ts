import { string, z } from "zod";

export const UserUpdate = z.object({
   name: string({ required_error: "Name is required" }).min(
      3,
      "Minimun Name is 3 chatacters"
   ),
   image:string().nullable().optional()
});
