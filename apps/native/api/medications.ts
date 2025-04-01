import { ENDPOINT_URL } from '@env';
import { apiVersion, endPoint } from './../../api/src/utils/endPoint';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { TMedicationsResponse } from '../types/medicationTypes';

export const useMedicationsList = () => {
  return useQuery({
    queryKey: ['MedicationsList'],
    queryFn: async () => {
      const { data } = await axios.request<TMedicationsResponse>({
        baseURL: `${ENDPOINT_URL}${apiVersion}${endPoint.medicationEndPoint.ALL_MEDICATIONS}`,
        method: 'GET',
      });
      return data.data;
    },
  });
};
