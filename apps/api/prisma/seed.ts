import { prismaClient } from './../src/utils/prisma';
import { getPrescriptionData } from './seeders/prescriptions.data';



async function main() {
    console.log('Seeding database...');
  
    // Create a Prescription
    const prescription1 = await prismaClient.prescription.create({
      data: {
        doctorName: 'Dr. John Doe',
        description: 'Flu treatment prescription',
        medications: {
          create: [
            {
              description: 'Paracetamol 500mg',
              expirationDate: new Date('2025-12-31'),
              tag: 'Pain Relief',
            },
            {
              description: 'Ibuprofen 200mg',
              expirationDate: new Date('2024-10-15'),
              tag: 'Anti-inflammatory',
            },
          ],
        },
      },
    });
  
    const prescription2 = await prismaClient.prescription.create({
      data: {
        doctorName: 'Dr. Alice Smith',
        description: 'Allergy prescription',
        medications: {
          create: [
            {
              description: 'Loratadine 10mg',
              expirationDate: new Date('2026-06-30'),
              tag: 'Antihistamine',
            },
          ],
        },
      },
    });
  
    console.log(`Seeded prescriptions: ${prescription1.id}, ${prescription2.id}`);
  }
  
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prismaClient.$disconnect();
    });