-- CreateTable
CREATE TABLE "PromoCode" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "promoType" TEXT NOT NULL,

    CONSTRAINT "PromoCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "productIds" TEXT[],
    "moneyCharged" INTEGER NOT NULL,
    "isPaid" BOOLEAN NOT NULL,
    "isEmailSent" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);
