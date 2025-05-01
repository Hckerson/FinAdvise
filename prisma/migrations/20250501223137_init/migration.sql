/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Avatar` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "TeamMember" (
    "id" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "bio" TEXT,
    "linkedIn" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TeamMember_userId_key" ON "TeamMember"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Avatar_userId_key" ON "Avatar"("userId");

-- AddForeignKey
ALTER TABLE "TeamMember" ADD CONSTRAINT "TeamMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
