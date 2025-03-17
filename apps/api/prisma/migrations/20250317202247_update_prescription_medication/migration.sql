-- DropForeignKey
ALTER TABLE "Medication" DROP CONSTRAINT "Medication_prescriptionId_fkey";

-- AlterTable
ALTER TABLE "Medication" ALTER COLUMN "prescriptionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Medication" ADD CONSTRAINT "Medication_prescriptionId_fkey" FOREIGN KEY ("prescriptionId") REFERENCES "Prescription"("id") ON DELETE SET NULL ON UPDATE CASCADE;
