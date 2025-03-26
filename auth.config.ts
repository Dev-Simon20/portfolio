import { logInSchema } from "@/lib/zod";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prismaShop } from "@/app/projects/my-little-shop/lib/shop-db";
// Notice this is only an object, not a full Auth.js instance
export default {
   providers: [
      Credentials({
         authorize: async (credentials) => {
            const { data, success } = logInSchema.safeParse(credentials);
            if (!success) {
               throw new Error("Credenciales invalidas");
            }

            //verificar si el usuario existe
            const user = await prismaShop.user.findUnique({
               where: {
                  email: data.email,
               },
            });
            if (!user || !user.password) {
               throw new Error("No user found");
            }
            const isvalid = await bcrypt.compare(data.password, user.password);

            if (!isvalid) {
               throw new Error("Incorrect oassword");
            }

            return user
         },
      }),
   ],
} satisfies NextAuthConfig;
