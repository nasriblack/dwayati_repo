import { TListPrescription } from '../models/prescription.model';
import { prismaClient } from '../utils/prisma';

// :Promise<TListPrescription[]>




export const listPrescription = async (): Promise<TListPrescription[]> => {
    return prismaClient.prescription.findMany({
        select: {
            id: true,
            createdAt: true,
            description: true,
            doctorName: true,
            medications: {
                select: {
                    id: true,
                    description: true,
                    expirationDate: true,
                    tag: true,
                }
            }
        }
    })
}


export const getPrescription = async (id: string): Promise<TListPrescription | null> => {
    return prismaClient.prescription.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            createdAt: true,
            description: true,
            doctorName: true,
            medications: {
                select: {
                    id: true,
                    description: true,
                    expirationDate: true,
                    tag: true,
                }
            }
        }
    })
}

export const deletePrescription = async (id: string): Promise<void> => {
    await prismaClient.prescription.delete({
        where: {
            id,
        }
    })
}