-- CreateEnum
CREATE TYPE "public"."PlaybackStatus" AS ENUM ('PLAYING', 'PAUSED');

-- CreateEnum
CREATE TYPE "public"."AutoplayType" AS ENUM ('REPEAT', 'SHUFFLE', 'DISABLED');

-- CreateEnum
CREATE TYPE "public"."ItemStatus" AS ENUM ('PREVIOUS', 'CURRENT', 'NEXT');

-- CreateTable
CREATE TABLE "public"."profile" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "conntectedSpotify" BOOLEAN NOT NULL DEFAULT false,
    "nextConnectSpotify" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."party" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "positionMS" INTEGER NOT NULL DEFAULT 0,
    "startedAt" TIMESTAMP(3),
    "status" "public"."PlaybackStatus" NOT NULL DEFAULT 'PLAYING',
    "autoplay" "public"."AutoplayType" NOT NULL DEFAULT 'REPEAT',
    "headId" TEXT,
    "tailId" TEXT,
    "currentId" TEXT,

    CONSTRAINT "party_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."party_member" (
    "id" TEXT NOT NULL,
    "permissions" BOOLEAN[],
    "userId" TEXT NOT NULL,
    "partyId" TEXT NOT NULL,

    CONSTRAINT "party_member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."queue_item" (
    "id" TEXT NOT NULL,
    "status" "public"."ItemStatus" NOT NULL,
    "partyId" TEXT NOT NULL,
    "prevId" TEXT,
    "nextId" TEXT,

    CONSTRAINT "queue_item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_email_key" ON "public"."profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "party_headId_key" ON "public"."party"("headId");

-- CreateIndex
CREATE UNIQUE INDEX "party_tailId_key" ON "public"."party"("tailId");

-- CreateIndex
CREATE UNIQUE INDEX "party_currentId_key" ON "public"."party"("currentId");

-- CreateIndex
CREATE INDEX "party_member_partyId_idx" ON "public"."party_member"("partyId");

-- CreateIndex
CREATE INDEX "party_member_userId_idx" ON "public"."party_member"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "party_member_partyId_userId_key" ON "public"."party_member"("partyId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "queue_item_prevId_key" ON "public"."queue_item"("prevId");

-- CreateIndex
CREATE UNIQUE INDEX "queue_item_nextId_key" ON "public"."queue_item"("nextId");

-- CreateIndex
CREATE INDEX "queue_item_partyId_idx" ON "public"."queue_item"("partyId");

-- AddForeignKey
ALTER TABLE "public"."party" ADD CONSTRAINT "party_headId_fkey" FOREIGN KEY ("headId") REFERENCES "public"."queue_item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."party" ADD CONSTRAINT "party_tailId_fkey" FOREIGN KEY ("tailId") REFERENCES "public"."queue_item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."party" ADD CONSTRAINT "party_currentId_fkey" FOREIGN KEY ("currentId") REFERENCES "public"."queue_item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."party_member" ADD CONSTRAINT "party_member_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."party_member" ADD CONSTRAINT "party_member_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "public"."party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."queue_item" ADD CONSTRAINT "queue_item_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "public"."party"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."queue_item" ADD CONSTRAINT "queue_item_prevId_fkey" FOREIGN KEY ("prevId") REFERENCES "public"."queue_item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."queue_item" ADD CONSTRAINT "queue_item_nextId_fkey" FOREIGN KEY ("nextId") REFERENCES "public"."queue_item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
