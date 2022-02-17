/*
  Warnings:

  - You are about to drop the column `firstVisit` on the `traffic` table. All the data in the column will be lost.
  - You are about to drop the column `lastVisit` on the `traffic` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `traffic` table. All the data in the column will be lost.
  - You are about to drop the column `userAgent` on the `traffic` table. All the data in the column will be lost.
  - Added the required column `first_visit` to the `traffic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_visit` to the `traffic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "traffic" DROP COLUMN "firstVisit",
DROP COLUMN "lastVisit",
DROP COLUMN "location",
DROP COLUMN "userAgent",
ADD COLUMN     "connorcodes" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "dartmule" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "first_visit" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "last_visit" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_agent" TEXT;
