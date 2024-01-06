/*
  Warnings:

  - You are about to drop the column `providerAccountId` on the `Account` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[providerId,providerId_providerAccountId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Account_providerId_providerAccountId_key";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "providerAccountId",
ADD COLUMN     "providerId_providerAccountId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Account_providerId_providerId_providerAccountId_key" ON "Account"("providerId", "providerId_providerAccountId");
