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
import { useMedicationsList } from '../../api/medications';
import { getExpirationColor } from '../../utils/getExpirationColor';

export default function MedicationsScreen() {
  const { data, isLoading } = useMedicationsList();

  console.log('checking the medication', data);

  return (
    <LinearGradient colors={['#1a1b1e', '#2d2e32']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Medications</Text>
        <TouchableOpacity style={styles.addButton}>
          <Plus color="#fff" size={24} />
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <>
          <ActivityIndicator size="large" color="#2d2e32" />
        </>
      ) : (
        <>
          <ScrollView style={styles.content}>
            {data?.map((medicament) => (
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
                          <Tag color="#fff" size={15} />
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
    borderRadius: 10,
  },
});
