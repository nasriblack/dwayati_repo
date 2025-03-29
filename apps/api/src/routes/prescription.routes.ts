import express, { Router, type Express } from "express";
import * as PrescriptionController from "../controller/prescription.controller";
import { endPoint } from "../utils/endPoint";
const prescriptionRouter: Router = express.Router();

prescriptionRouter.get(
  endPoint.prescriptionEndPoint.ALL_PRESCRIPTION,
  PrescriptionController.listPrescription
);
prescriptionRouter.delete(
  endPoint.prescriptionEndPoint.DELETE_PRESCRIPTION,
  PrescriptionController.checkExistingPrescription,
  PrescriptionController.deletePrescription
);
prescriptionRouter.post(
  endPoint.prescriptionEndPoint.CREATE_PRESCRIPTION,
  PrescriptionController.validatePrescriptionData,
  PrescriptionController.checkExistingMedication,
  PrescriptionController.createPrescription
);

export default prescriptionRouter;
