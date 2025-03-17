import { sendSuccessResponse } from '../utils/responseHandler';
import { NextFunction, Response, Request } from "express";

import * as PrescriptionService from '../services/prescription.service'

export const listPrescription = async (reques:Request, response:Response,next:NextFunction) => {
    try {
        const prescription = await PrescriptionService.listPrescription()
        return sendSuccessResponse(response,prescription)
        // return sendSuccessResponse(response,prescription)
    } catch (error) {
        next(error)
    }
}