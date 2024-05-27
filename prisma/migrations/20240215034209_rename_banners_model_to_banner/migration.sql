/*
  Warnings:

  - You are about to drop the `banners` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "banners" DROP CONSTRAINT "banners_createdBy_fkey";

-- DropTable
DROP TABLE "banners";

-- CreateTable
CREATE TABLE "Banner" (
    "id" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "link" TEXT NOT NULL,
    "linkText" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "updatedBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Banner" ADD CONSTRAINT "Banner_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
