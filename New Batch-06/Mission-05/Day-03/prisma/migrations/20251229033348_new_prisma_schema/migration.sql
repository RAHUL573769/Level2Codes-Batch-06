-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('User', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "ROLE" NOT NULL DEFAULT 'User';

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "dateOBirth" TEXT,
    "profileUserId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_name_key" ON "Profile"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_profileUserId_key" ON "Profile"("profileUserId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_profileUserId_fkey" FOREIGN KEY ("profileUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
