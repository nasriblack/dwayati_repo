import { IMedication } from "../models/medication.model";
import { prismaClient } from "../utils/prisma";

export const listMedications = async (): Promise<IMedication[]> => {
  return prismaClient.medication.findMany({
    select: {
      id: true,
      description: true,
      expirationDate: true,
      tag: true,
      prescription: {
        select: {
          createdAt: true,
          description: true,
          doctorName: true,
        },
      },
    },
  });
};

export const createMedication = async (
  medication: any
): Promise<IMedication> => {
  return prismaClient.medication.create({
    data: {
      expirationDate: medication.expirationDate,
      description: medication.description,
      tag: medication.tag,
      prescription: {
        connect: medication.prescriptions,
      },
    },
    select: {
      description: true,
      expirationDate: true,
      tag: true,
      id: true,
      prescription: {
        select: {
          doctorName: true,
          createdAt: true,
          description: true,
        },
      },
    },
  });
};
