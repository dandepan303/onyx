/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `party_member` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "party_member_userId_key" ON "public"."party_member"("userId");
