/* eslint-disable react/react-in-jsx-scope */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Plus, Calendar, Pill } from 'lucide-react-native';
import {
  useAddPrescription,
  usePrescriptionsList,
} from '../../api/prescriptions';
import { formatDate } from '../../utils/formatDateFunction';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from '../../components/Modal';
import { FormField, FormSelect, SubmitButton } from '../../components/Form';
import { useMedicationsList } from '../../api/medications';

export default function PrescriptionsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      doctorName: '',
      description: '',
      medications: [],
    },
  });

  const [medicationsArray, setmedicationsArray] = useState<any>([]);

  useEffect(() => {
    const { unsubscribe } = watch((value) => {
      setmedicationsArray(value.medications);
    });
    return () => unsubscribe();
  }, [watch]);

  const { mutateAsync } = useAddPrescription();

  const onSubmit = (data: any) => {
    mutateAsync(data);
    setModalVisible(false);
    reset();
  };
  const {
    data: PrescriptionsData,
    isError: isErrorPrescriptions,
    isLoading: isLoadingPrescriptions,
  } = usePrescriptionsList();
  const { data: MedicationsData } = useMedicationsList();
  return (
    <LinearGradient colors={['#1a1b1e', '#2d2e32']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Prescriptions</Text>
        <TouchableOpacity style={styles.addButton}>
          <Plus onPress={() => setModalVisible(true)} color="#fff" size={24} />
        </TouchableOpacity>
      </View>

      {isLoadingPrescriptions ? (
        <>
          <ActivityIndicator size="large" color="#2d2e32" />
        </>
      ) : (
        <>
          {isErrorPrescriptions ? (
            <>something went wrongs</>
          ) : (
            <>
              <ScrollView style={styles.content}>
                {PrescriptionsData?.map((index) => (
                  <TouchableOpacity
                    key={index.id}
                    style={styles.prescriptionCard}
                  >
                    <View style={styles.prescriptionHeader}>
                      <View style={styles.dateContainer}>
                        <Calendar color="#fff" size={20} />
                        <Text style={styles.date}>
                          {formatDate(index?.createdAt as string)}
                        </Text>
                      </View>
                      <View style={styles.statusBadge}>
                        <Text style={styles.statusText}>Active</Text>
                      </View>
                    </View>
                    <Text style={styles.doctorName}>{index.doctorName}</Text>
                    <Text style={styles.diagnosis}>{index.description}</Text>
                    <View style={styles.medicationList}>
                      {index?.medications.map((medicament) => (
                        <Text key={medicament.id} style={styles.medicationItem}>
                          <>
                            <Pill size={15} color={'#666'} />
                            {medicament.name}
                          </>
                        </Text>
                      ))}
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </>
          )}
        </>
      )}
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <View>
          <Text style={styles.modalTitle}>Add New Prescription</Text>
          <FormField
            control={control}
            name="doctorName"
            label="Doctor's Name"
            placeholder="Enter doctor's name"
            rules={{ required: "Doctor's name is required" }}
          />
          <FormField
            control={control}
            name="description"
            label="Diagnosis"
            placeholder="Enter diagnosis"
            rules={{ required: 'Diagnosis is required' }}
          />
          {/* <FormField
            control={control}
            name="date"
            label="Prescription Date"
            placeholder="Enter date (MM/DD/YYYY)"
            rules={{ required: 'Date is required' }}
          /> */}
          <FormSelect
            control={control}
            name="medications"
            label="Prescribed Medications"
            options={MedicationsData}
            medicationsArray={medicationsArray}
            // rules={{ required: 'At least one medication is required' }}
          />
          <SubmitButton
            title="Add Prescription"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'PlusJakartaSans_700Bold',
    color: '#fff',
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#4a4b50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  prescriptionCard: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    marginBottom: 16,
  },
  prescriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    marginLeft: 8,
    color: '#fff',
    fontFamily: 'Inter_400Regular',
  },
  statusBadge: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
  },
  doctorName: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 4,
  },
  diagnosis: {
    fontSize: 16,
    color: '#999',
    fontFamily: 'Inter_400Regular',
    marginBottom: 12,
  },
  medicationList: {
    marginTop: 8,
  },
  medicationItem: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Inter_400Regular',
    marginBottom: 4,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
});
