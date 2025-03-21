import express, { Router, type Express } from "express";
import * as PrescriptionController from "../controller/prescription.controller";
const prescriptionRouter: Router = express.Router();

prescriptionRouter.get(
  "/all-prescription",
  PrescriptionController.listPrescription
);
prescriptionRouter.delete(
  "/prescription/:id",
  PrescriptionController.checkExistingPrescription,
  PrescriptionController.deletePrescription
);
prescriptionRouter.post(
  "/prescription",
  PrescriptionController.validatePrescriptionData,
  PrescriptionController.createPrescription
);

export default prescriptionRouter;
