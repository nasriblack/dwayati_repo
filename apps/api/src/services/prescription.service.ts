import { TListPrescription } from "../models/prescription.model";
import { prismaClient } from "../utils/prisma";

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
                },
            },
        },
    });
};

export const getPrescription = async (
    id: string
): Promise<TListPrescription | null> => {
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
                },
            },
        },
    });
};

export const createPrescription = async (
    prescription: any
): Promise<TListPrescription> => {
    return prismaClient.prescription.create({
        data: {
            doctorName: prescription.doctorName,
            description: prescription.description,
            medications: {
                create: prescription.medications, // Explicitly create medications
            },
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
                },
            },
        },
    });
};

export const deletePrescription = async (id: string): Promise<void> => {
    await prismaClient.prescription.delete({
        where: {
            id,
        },
    });
};
