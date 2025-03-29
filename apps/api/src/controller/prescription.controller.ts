import {
  sendNotFoundResponse,
  sendSuccessResponse,
} from "../utils/responseHandler";
import { NextFunction, Response, Request } from "express";

import * as PrescriptionService from "../services/prescription.service";
import * as MedicationService from "../services/medication.service";
import HttpStatusCode from "../utils/HttpStatusCode";
import { prescriptionSchema } from "../types/zod";

export const listPrescription = async (
  reques: Request,
  response: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const prescription = await PrescriptionService.listPrescription();
    return sendSuccessResponse(response, prescription);
  } catch (error) {
    next(error);
  }
};

export const checkExistingPrescription = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const id = request.params.id;
    const existingPrescription = await PrescriptionService.getPrescription(id);
    if (!existingPrescription) {
      return sendNotFoundResponse(response, "Prescription Not Found");
    }
    next();
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
    const medicationId = request.body.medications;
    if (!medicationId) {
      next();
    }
    for (const element of medicationId) {
      const checkExistingMedication = await MedicationService.getMedicationById(
        element.id
      );
      if (!checkExistingMedication) {
        return sendNotFoundResponse(response, "Medication Not Found");
      }
    }

    next();
  } catch (error) {
    next(error);
  }
};

export const createPrescription = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const prescriptionPayload = request.body;
    console.log("chekcing the rpescriptionPayload", prescriptionPayload);
    const newPrescription =
      await PrescriptionService.createPrescription(prescriptionPayload);
    return sendSuccessResponse(
      response,
      newPrescription,
      HttpStatusCode.CREATED
    );
  } catch (error) {
    next(error);
  }
};

export const validatePrescriptionData = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const payloadPrescription = request.body;
    prescriptionSchema.parse(payloadPrescription);
    next();
  } catch (error) {
    next(error);
  }
};

export const deletePrescription = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const id = request.params.id;
    console.log("iam deleting this id", id);

    await PrescriptionService.deletePrescription(id);
    return sendSuccessResponse(response, "Prescription has been deleted");
  } catch (error) {
    next(error);
  }
};
