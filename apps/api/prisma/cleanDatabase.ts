import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Resetting database...");

  // Delete all records from both tables
  await prisma.medication.deleteMany();
  await prisma.prescription.deleteMany();

  console.log("Database cleared!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
