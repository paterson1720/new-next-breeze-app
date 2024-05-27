-- DropForeignKey
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_user_fkey";

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
