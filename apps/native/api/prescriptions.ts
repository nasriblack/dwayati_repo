import { ENDPOINT_URL } from '@env';
import { apiVersion, endPoint } from './../../api/src/utils/endPoint';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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

export const useAddPrescription = () => {
  const queryClient = useQueryClient();

  return useMutation({
    async mutationFn(payload: any) {
      const { data } = await axios.request<TPrescriptionResponse>({
        baseURL: `${ENDPOINT_URL}${apiVersion}${endPoint.prescriptionEndPoint.CREATE_PRESCRIPTION}`,
        data: { ...payload },
        method: 'POST',
      });
      return data;
    },
    async onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['prescriptionsList'] });
    },
  });
};
