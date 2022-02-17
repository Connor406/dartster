/*
  Warnings:

  - The primary key for the `traffic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `traffic` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "traffic" DROP CONSTRAINT "traffic_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "traffic_pkey" PRIMARY KEY ("ip");
