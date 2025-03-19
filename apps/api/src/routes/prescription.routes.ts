import express, { Router, type Express } from "express";
import * as BookController from '../controller/prescription.controller'
const prescriptionRouter:Router = express.Router()

prescriptionRouter.get('/all-prescription',BookController.listPrescription as any )
prescriptionRouter.delete('/prescription/:id',BookController.checkExistingPrescription as any,BookController.deletePrescription as any )
prescriptionRouter.post('/prescription',BookController.createPrescription as any )

export default prescriptionRouter;





