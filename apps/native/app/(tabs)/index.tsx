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
import { Plus, Clock, Tag } from 'lucide-react-native';
import { useAddMedication, useMedicationsList } from '../../api/medications';
import { getExpirationColor } from '../../utils/getExpirationColor';
import { Modal } from '../../components/Modal';
import { FormDateField, FormField, SubmitButton } from '../../components/Form';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function MedicationsScreen() {
  const { data: MedicationData, isLoading: isLoadingMedications } =
    useMedicationsList();

  const { mutateAsync } = useAddMedication();

  console.log('checking the medication', MedicationData);
  const [modalVisible, setModalVisible] = useState(false);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      description: '',
      tag: '',
      expirationDate: '',
      prescription: [],
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    mutateAsync(data);
    setModalVisible(false);
    reset();
  };
  return (
    <LinearGradient colors={['#1a1b1e', '#2d2e32']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Medications</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.addButton}
        >
          <Plus color="#fff" size={24} />
        </TouchableOpacity>
      </View>

      {isLoadingMedications ? (
        <>
          <ActivityIndicator size="large" color="#2d2e32" />
        </>
      ) : (
        <>
          <ScrollView style={styles.content}>
            {MedicationData?.map((medicament) => (
              <View style={styles.section} key={medicament.id}>
                <View style={styles.medicationCard}>
                  <View
                    style={{
                      ...styles.medicationIcon,
                      backgroundColor: getExpirationColor(
                        medicament.expirationDate as string,
                      ),
                    }}
                  >
                    <Clock color="#fff" size={24} />
                  </View>
                  <View style={styles.medicationInfo}>
                    <Text style={styles.medicationName}>{medicament.name}</Text>
                    <Text style={styles.medicationTime}>
                      {medicament.description}
                    </Text>
                    <View style={styles.tagName}>
                      {medicament.tag?.split(' ').map((tag, index) => (
                        <Text style={styles.textTag} key={index}>
                          <Tag color="#c9c8c8" size={15} />
                          {tag}
                        </Text>
                      ))}
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </>
      )}
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <View>
          <Text style={styles.modalTitle}>Add New Medication</Text>
          <FormField
            control={control}
            name="name"
            label="Medication Name"
            placeholder="Enter medication name"
            rules={{ required: 'Medication name is required' }}
          />
          <FormField
            control={control}
            name="description"
            label="Description"
            placeholder="Enter the description of this medicament"
            rules={{ required: 'Description is required' }}
          />
          <FormField
            control={control}
            name="tag"
            label="Tag"
            placeholder="Seperate the tag with space"
            rules={{ required: 'Tag is required' }}
          />
          <FormDateField
            control={control}
            name="expirationDate"
            label="Expiration Date"
            rules={{
              required: 'Expiration date must be YYYY-MM-DD',
            }}
          />

          <SubmitButton
            title="Add Medication"
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    marginBottom: 12,
  },
  medicationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    marginBottom: 12,
  },
  medicationIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  warningIcon: {
    backgroundColor: '#e2574a',
  },
  medicationInfo: {
    flex: 1,
  },
  medicationName: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    marginBottom: 4,
  },
  medicationTime: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#999',
  },

  tagName: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingTop: 7,
  },
  textTag: {
    display: 'flex',
    gap: 2,
    borderWidth: 1,
    padding: 9,
    borderColor: 'white',
    color: 'white',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
});
