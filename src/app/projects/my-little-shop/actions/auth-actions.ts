"use server";
import { signIn } from "@/auth";
import { logInSchema, RegisterSchema } from "@/lib/zod";
import { AuthError } from "next-auth";
import { z } from "zod";
import { prismaShop } from "../lib/shop-db";
import bcrypt from "bcryptjs";

export const loginActionLittleShop = async (
   values: z.infer<typeof logInSchema>
) => {
   try {
      await signIn("credentials", {
         email: values.email,
         password: values.password,
         redirect: false,
      });
      return { success: true };
   } catch (error) {
      if (error instanceof AuthError) {
         return { error: error.cause?.err?.message };
      }
      return { error: "error 500" };
   }
};

export const registerActionLittleShop = async (
   values: z.infer<typeof RegisterSchema>
) => {
   try {
      const { data, success } = RegisterSchema.safeParse(values);
      if (!success) {
         return {
            error: "Invalid data",
         };
      }
      const user = await prismaShop.user.findUnique({
         where: {
            email: data.email,
         },
      });
      if (user) {
         return {
            error: "User already exist",
         };
      }
      const passwordHash = await bcrypt.hash(data.password, 10);

      await prismaShop.user.create({
         data: {
            email: data.email,
            name: data.name,
            password: passwordHash,
         },
      });
      await signIn("credentials", {
         email: data.email,
         password: data.password,
         redirect: false,
      });
      return { success: true };
   } catch (error) {
      if (error instanceof AuthError) {
         return { error: error.cause?.err?.message };
      }
      console.log(error);
      
      return { error: "error 500" };
   }
};
