import { prismaClient } from './../src/utils/prisma';
import { getPrescriptionData } from './seeders/prescriptions.data';
const main =  async () => {
    try {
        console.log('seeding database ...')
        await prismaClient.prescription.deleteMany();
        console.log('successfuly deleting the prescriptions')
        await Promise.all(
            getPrescriptionData().map((prescription) => {
              console.log(`[*] Seeding prescription : ${JSON.stringify(prescription)}`);
              return prismaClient.prescription.create({
                data: {
                    ...prescription

                },
              });
            })
          );
    } catch (error) {
        console.error('ERROR IN SEEDING DATABASE:', error)
    }
}

main()