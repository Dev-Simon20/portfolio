import { object, string,date, number } from "zod"
 
export const logInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(6, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})

export const RegisterSchema = object({
    email: string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email"),
    password: string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .min(6, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
      name: string({ required_error: "Name is required" })
      .min(1, "Name is required")
      .max(32,"Name must be less than 32 characters")
      // birthdate:date({required_error:"Ingrese la fecha de nacimiento"})
      // .min(new Date("1900-01-01"), { message: "Too old" })
      // .max(new Date("2021-01-01"), { message: "Too young!" })
  })
