import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { shopDB } from "@g/lib/shop-db";

export const { handlers, signIn, signOut, auth } = NextAuth({
   // adapter: PrismaAdapter(shopDB),
   session: { strategy: "jwt" },
   ...authConfig,
});
