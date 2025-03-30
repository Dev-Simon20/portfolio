import { object, string } from "zod";

export const newCustomerSchema = object({
    name: string({ required_error: 'Name is required' })
      .min(3, "Name must be more than 3 characters")
  })