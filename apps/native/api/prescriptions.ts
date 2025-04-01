import { ENDPOINT_URL } from '@env';
import { apiVersion, endPoint } from './../../api/src/utils/endPoint';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { TPrescriptionResponse } from '../types/prescriptionTypes';

export const usePrescriptionsList = () => {
  return useQuery({
    queryKey: ['prescriptionsList'],
    queryFn: async () => {
      const { data } = await axios.request<TPrescriptionResponse>({
        baseURL: `${ENDPOINT_URL}${apiVersion}${endPoint.prescriptionEndPoint.ALL_PRESCRIPTION}`,
        method: 'GET',
      });
      return data.data;
    },
  });
};
