import { NextFunction, Request, Response } from "express";
import * as medicationService from "../services/medication.service";
import * as PrescriptionService from "../services/prescription.service";
import {
  sendNotFoundResponse,
  sendSuccessResponse,
} from "../utils/responseHandler";
import HttpStatusCode from "../utils/HttpStatusCode";
import { MedicationSchema } from "../types/zod";

export const listMedication = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const medications = await medicationService.listMedications();
    return sendSuccessResponse(response, medications);
  } catch (error) {
    next(error);
  }
};

export const createMedication = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const medicationPayload = request.body;
    const newMedication =
      await medicationService.createMedication(medicationPayload);
    return sendSuccessResponse(response, newMedication, HttpStatusCode.CREATED);
  } catch (error) {
    next(error);
  }
};

export const checkExistingMedication = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const medicationName = request.body.name;
    if (!medicationName) {
      return sendNotFoundResponse(response, "Medication Name is required");
    }
    const medication = await medicationService.getMedication(medicationName);
    if (medication) {
      return sendNotFoundResponse(response, "Medication Already exist");
    }
    next();
  } catch (error) {
    next(error);
  }
};

export const checkingExistingPrescription = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const prescriptionId = request.body.prescription;
    if (!prescriptionId) {
      next();
    }
    for (const element of prescriptionId) {
      const checkExistingPrescription =
        await PrescriptionService.getPrescription(element.id);
      if (!checkExistingPrescription) {
        return sendNotFoundResponse(response, "Medication Not Found");
      }
    }

    next();
  } catch (error) {
    next(error);
  }
};

export const validateMedicationData = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const payloadMedication = request.body;
    MedicationSchema.parse(payloadMedication);
    next();
  } catch (error) {
    next(error);
  }
};

export const updateMedication = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const id = request.params.id;
    const medication = request.body;
    const updateMedicationData = await medicationService.updateMedication(
      medication,
      id
    );

    return sendSuccessResponse(response, updateMedicationData);
  } catch (error) {
    next(error);
  }
};
