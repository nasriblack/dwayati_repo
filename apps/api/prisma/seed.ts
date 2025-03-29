import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Resetting database...");

  // Delete all records from both tables
  await prisma.medication.deleteMany();
  await prisma.prescription.deleteMany();

  console.log("Database cleared! Seeding new data...");

  // Create prescriptions
  const prescription1 = await prisma.prescription.create({
    data: {
      doctorName: "Dr. John Doe",
      description: "Flu treatment prescription",
      medications: {
        create: [
          {
            name: "Paracetamol",
            description: "Paracetamol 500mg",
            expirationDate: new Date("2025-12-31"),
            tag: "Pain Relief",
          },
          {
            name: "Ibuprofen",
            description: "Ibuprofen 200mg",
            expirationDate: new Date("2024-10-15"),
            tag: "Anti-inflammatory",
          },
        ],
      },
    },
  });

  const prescription2 = await prisma.prescription.create({
    data: {
      doctorName: "Dr. Alice Smith",
      description: "Allergy prescription",
      medications: {
        create: [
          {
            name: "Loratadine",
            description: "Loratadine 10mg",
            expirationDate: new Date("2026-06-30"),
            tag: "Antihistamine",
          },
        ],
      },
    },
  });

  // Creating a medication that belongs to multiple prescriptions
  const sharedMedication = await prisma.medication.create({
    data: {
      name: "Aspirin",
      description: "Aspirin 100mg",
      expirationDate: new Date("2025-09-10"),
      tag: "Blood Thinner",
      prescription: {
        connect: [{ id: prescription1.id }, { id: prescription2.id }],
      },
    },
  });

  console.log(`Seeded prescriptions: ${prescription1.id}, ${prescription2.id}`);
  console.log(`Seeded shared medication: ${sharedMedication.id}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
