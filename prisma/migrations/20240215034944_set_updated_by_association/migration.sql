-- DropForeignKey
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "Banner" DROP CONSTRAINT "Banner_createdBy_fkey";

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Banner" ADD CONSTRAINT "Banner_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
