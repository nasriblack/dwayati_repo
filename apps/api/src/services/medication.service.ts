import { IMedication } from "../models/medication.model";
import { prismaClient } from "../utils/prisma";

export const listMedications = async (): Promise<IMedication[]> => {
  return prismaClient.medication.findMany({
    select: {
      id: true,
      description: true,
      expirationDate: true,
      tag: true,
      name: true,
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
      name: medication.name,
      prescription: {
        connect: medication.prescription,
      },
    },
    select: {
      description: true,
      expirationDate: true,
      tag: true,
      id: true,
      name: true,
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

export const getMedication = async (medicationName: string): Promise<any> => {
  return prismaClient.medication.findUnique({
    where: {
      name: medicationName,
    },
  });
};
export const getMedicationById = async (medicationId: string): Promise<any> => {
  return prismaClient.medication.findUnique({
    where: {
      id: medicationId,
    },
  });
};

export const updateMedication = async (
  medication: any,
  id: string
): Promise<IMedication> => {
  return prismaClient.medication.update({
    where: {
      id,
    },
    data: {
      description: medication.description,
      expirationDate: medication.expirationDate,
      tag: medication.tag,
    },
    select: {
      description: true,
      id: true,
      expirationDate: true,
      name: true,
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
