/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Medication` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Medication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Medication" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Medication_name_key" ON "Medication"("name");
