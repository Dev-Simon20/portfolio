/*
  Warnings:

  - You are about to drop the column `purchasePrice` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "purchasePrice";

-- AlterTable
ALTER TABLE "Stock" ADD COLUMN     "purchasePrice" DOUBLE PRECISION NOT NULL DEFAULT 1;
