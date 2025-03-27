/*
  Warnings:

  - The values [credit] on the enum `PaymentType` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `status` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusPaid" AS ENUM ('paid', 'credit');

-- AlterEnum
BEGIN;
CREATE TYPE "PaymentType_new" AS ENUM ('cash', 'yape', 'plin');
ALTER TABLE "Order" ALTER COLUMN "paymentType" TYPE "PaymentType_new" USING ("paymentType"::text::"PaymentType_new");
ALTER TYPE "PaymentType" RENAME TO "PaymentType_old";
ALTER TYPE "PaymentType_new" RENAME TO "PaymentType";
DROP TYPE "PaymentType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "status" "StatusPaid" NOT NULL;
