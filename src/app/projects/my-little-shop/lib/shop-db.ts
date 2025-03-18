import { PrismaClient as PrismaClientShop} from "@/prisma/generated/clientShop";

const globalForPrisma = globalThis as unknown as { prismaShop: PrismaClientShop };

export const prismaShop = globalForPrisma.prismaShop || new PrismaClientShop();

if (process.env.NODE_ENV !== "production") globalForPrisma.prismaShop = prismaShop;