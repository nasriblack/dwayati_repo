import express, { Router, type Express } from "express";
import * as medicationController from "../controller/medication.controller";
import { endPoint } from "../utils/endPoint";

const medciationRouter: Router = express.Router();

medciationRouter.get(
  endPoint.medicationEndPoint.ALL_MEDICATIONS,
  medicationController.listMedication
);
medciationRouter.get(
  endPoint.medicationEndPoint.SEARCH_MEDICATION,
  medicationController.searchMedicationController
);
medciationRouter.post(
  endPoint.medicationEndPoint.CREATE_MEDICATION,
  medicationController.checkExistingMedication,
  medicationController.validateMedicationData,
  medicationController.checkingExistingPrescription,
  medicationController.createMedication
);

medciationRouter.put(
  endPoint.medicationEndPoint.UPDATE_MEDICATION,
  medicationController.updateMedication
);

export default medciationRouter;
