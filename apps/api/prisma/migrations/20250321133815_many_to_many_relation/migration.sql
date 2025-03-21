/*
  Warnings:

  - You are about to drop the column `prescriptionId` on the `Medication` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Medication" DROP CONSTRAINT "Medication_prescriptionId_fkey";

-- AlterTable
ALTER TABLE "Medication" DROP COLUMN "prescriptionId";

-- CreateTable
CREATE TABLE "_MedicationToPrescription" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_MedicationToPrescription_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_MedicationToPrescription_B_index" ON "_MedicationToPrescription"("B");

-- AddForeignKey
ALTER TABLE "_MedicationToPrescription" ADD CONSTRAINT "_MedicationToPrescription_A_fkey" FOREIGN KEY ("A") REFERENCES "Medication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedicationToPrescription" ADD CONSTRAINT "_MedicationToPrescription_B_fkey" FOREIGN KEY ("B") REFERENCES "Prescription"("id") ON DELETE CASCADE ON UPDATE CASCADE;
