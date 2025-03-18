import { PrismaClient as PrismaClientSchool  } from "@/prisma/generated/clientSchool";

const globalForPrisma = globalThis as unknown as { prismaSchool: PrismaClientSchool };

export const prismaSchool  = globalForPrisma.prismaSchool || new PrismaClientSchool();

if (process.env.NODE_ENV !== "production") globalForPrisma.prismaSchool = prismaSchool ;