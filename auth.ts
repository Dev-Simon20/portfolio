import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { prismaShop } from "@g/lib/shop-db";

export const { handlers, signIn, signOut, auth } = NextAuth({
   adapter: PrismaAdapter(prismaShop),
   ...authConfig,
   secret: process.env.NEXTAUTH_SECRET,
   session: { strategy: "jwt" },
   callbacks: {
      jwt({ token, user }) {
         if (user) {
            token.role = user.role;
            token.id=user.id
         }
         return token;
      },
      session({ session, token }) {
         if (session.user ) {
            session.user.role = token.role
            session.user.id=token.id as string
         }
         return session;

      }
   },
   // trustHost: process.env.NODE_ENV === "production",
});
