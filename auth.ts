import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import {prismaShop } from "@g/lib/shop-db";

export const { handlers, signIn, signOut, auth } = NextAuth({
   adapter: PrismaAdapter(prismaShop),
   session: { strategy: "jwt" },
   ...authConfig,
});
