import { NextFunction, Request, Response } from "express";
import * as medicationService from "../services/medication.service";
import { sendSuccessResponse } from "../utils/responseHandler";
import HttpStatusCode from "../utils/HttpStatusCode";

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
