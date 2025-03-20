import express, { Router, type Express } from "express";
import * as PrescriptionController from '../controller/prescription.controller'
const prescriptionRouter:Router = express.Router()

prescriptionRouter.get('/all-prescription',PrescriptionController.listPrescription as any )
prescriptionRouter.delete('/prescription/:id',PrescriptionController.checkExistingPrescription as any,PrescriptionController.deletePrescription as any )
prescriptionRouter.post('/prescription',PrescriptionController.validatePrescriptionData,PrescriptionController.createPrescription as any )

export default prescriptionRouter;





