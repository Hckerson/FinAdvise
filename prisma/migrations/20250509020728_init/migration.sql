/*
  Warnings:

  - You are about to drop the column `otpSecret` on the `Session` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Session` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Session" DROP COLUMN "otpSecret";

-- CreateIndex
CREATE UNIQUE INDEX "Session_userId_key" ON "Session"("userId");
