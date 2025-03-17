import { PrismaClient } from "@/prisma-little-shop/generated/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const shopDB = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = shopDB;