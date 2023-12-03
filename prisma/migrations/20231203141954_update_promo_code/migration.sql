/*
  Warnings:

  - Added the required column `usedNumber` to the `PromoCode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PromoCode" ADD COLUMN     "usedNumber" INTEGER NOT NULL;
