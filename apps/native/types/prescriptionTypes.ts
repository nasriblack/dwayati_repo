import { TListPrescription } from './../../api/src/models/prescription.model';

export interface TPrescriptionResponse {
  data: TListPrescription[];
  status: 'successful' | 'failed';
}
