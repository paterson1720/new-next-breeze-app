-- DropForeignKey
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_updatedBy_fkey";

-- DropForeignKey
ALTER TABLE "Banner" DROP CONSTRAINT "Banner_updatedBy_fkey";

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Banner" ADD CONSTRAINT "Banner_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
