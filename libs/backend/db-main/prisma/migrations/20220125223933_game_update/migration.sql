/*
  Warnings:

  - You are about to drop the column `playerOrder` on the `game` table. All the data in the column will be lost.
  - Added the required column `player1` to the `game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "game" DROP COLUMN "playerOrder",
ADD COLUMN     "player1" TEXT NOT NULL,
ADD COLUMN     "player2" TEXT,
ADD COLUMN     "player3" TEXT,
ADD COLUMN     "player4" TEXT,
ADD COLUMN     "player5" TEXT,
ADD COLUMN     "player6" TEXT;
