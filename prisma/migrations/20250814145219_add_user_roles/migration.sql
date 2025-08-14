/*
  Warnings:

  - Added the required column `role` to the `profile` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."UserRoles" AS ENUM ('GUEST', 'USER', 'ADMIN');

-- AlterTable
ALTER TABLE "public"."profile" ADD COLUMN     "role" "public"."UserRoles" NOT NULL;
