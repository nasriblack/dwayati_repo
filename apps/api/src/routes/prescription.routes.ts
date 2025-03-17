import express, { Router, type Express } from "express";
import * as BookController from '../controller/prescription.controller'
const prescriptionRouter:Router = express.Router()

prescriptionRouter.get('/all-prescription',BookController.listPrescription as any )

export default prescriptionRouter;





