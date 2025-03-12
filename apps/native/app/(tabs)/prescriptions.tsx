import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Plus, Calendar } from 'lucide-react-native';

export default function PrescriptionsScreen() {
  return (
    <LinearGradient colors={['#1a1b1e', '#2d2e32']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Prescriptions</Text>
        <TouchableOpacity style={styles.addButton}>
          <Plus color="#fff" size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {[1, 2, 3].map((index) => (
          <TouchableOpacity key={index} style={styles.prescriptionCard}>
            <View style={styles.prescriptionHeader}>
              <View style={styles.dateContainer}>
                <Calendar color="#fff" size={20} />
                <Text style={styles.date}>Mar {index + 14}, 2024</Text>
              </View>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>Active</Text>
              </View>
            </View>
            <Text style={styles.doctorName}>Dr. Sarah Johnson</Text>
            <Text style={styles.diagnosis}>Upper Respiratory Infection</Text>
            <View style={styles.medicationList}>
              <Text style={styles.medicationItem}>• Amoxicillin 500mg</Text>
              <Text style={styles.medicationItem}>• Ibuprofen 400mg</Text>
              <Text style={styles.medicationItem}>• Cetirizine 10mg</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  },
});
