/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `PromoCode` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PromoCode_name_key" ON "PromoCode"("name");
