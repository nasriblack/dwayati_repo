import { IMedication } from './../../api/src/models/medication.model';

export interface TMedicationsResponse {
  data: IMedication[];
  status: 'successful' | 'failed';
}
