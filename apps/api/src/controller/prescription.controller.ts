import { sendNotFoundResponse, sendSuccessResponse } from '../utils/responseHandler';
import { NextFunction, Response, Request } from "express";

import * as PrescriptionService from '../services/prescription.service'
import HttpStatusCode from '../utils/HttpStatusCode';

export const listPrescription = async (reques:Request, response:Response,next:NextFunction) => {
    try {
        const prescription = await PrescriptionService.listPrescription()
        return sendSuccessResponse(response,prescription)
    } catch (error) {
        next(error)
    }
}

export const checkExistingPrescription = async (request:Request, response:Response,next:NextFunction) => {
    try {   
        const id = request.params.id
        const existingPrescription = await PrescriptionService.getPrescription(id)
        if (!existingPrescription) {
            return sendNotFoundResponse(response,'Book Not Found')
        }
        next()
    } catch (error) {
        next(error)
    }
}

export const createPrescription = async (request:Request, response:Response,next:NextFunction) => {
    try {
        const prescriptionPayload = request.body
        console.log('chekcing the rpescriptionPayload', prescriptionPayload)
        const newPrescription = await PrescriptionService.createPrescription(prescriptionPayload)
        return sendSuccessResponse(response,newPrescription,HttpStatusCode.CREATED)

    } catch (error) {
        next(error)
    }
}

export const deletePrescription = async (request:Request, response:Response,next:NextFunction) => {
    try {
        const id = request.params.id
        console.log('iam deleting this id', id)

        await PrescriptionService.deletePrescription(id)
        return sendSuccessResponse(response,'Prescription has been deleted')
    } catch (error) {
        next(error)
    }
}