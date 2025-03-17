"use server"
import { signIn } from "@/auth";
import { logInSchema } from "@/lib/zod";
import { z } from "zod";

export const loginActionLittleShop = async (
   values: z.infer<typeof logInSchema>
) => {
   try {
      await signIn("credentials", {
         email: values.email,
         password: values.password,
         redirect: false,
      });
   } catch (error) {
      console.log(error);
   }
};
