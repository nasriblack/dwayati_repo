import express, { Router, type Express } from "express";
import * as medicationController from "../controller/medication.controller";

const medciationRouter: Router = express.Router();

medciationRouter.get("/all-medications", medicationController.listMedication);
medciationRouter.post(
  "/medication",
  medicationController.checkExistingMedication,
  medicationController.validateMedicationData,
  medicationController.createMedication
);

medciationRouter.put("/medication/:id", medicationController.updateMedication);

export default medciationRouter;
