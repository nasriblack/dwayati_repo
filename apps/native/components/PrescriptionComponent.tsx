import React from 'react';
import { TListPrescription } from '../../api/src/models/prescription.model';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ClipboardPlus } from 'lucide-react-native';

type Props = {
  prescription: TListPrescription[] | undefined;
};

const PrescriptionComponent = ({ prescription }: Props) => {
  return (
    <>
      {prescription?.map((item) => (
        <TouchableOpacity key={item.id} style={styles.resultItem}>
          <ClipboardPlus size={20} color="#666" />
          <Text style={styles.resultText}>{item.description}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  resultText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Inter_400Regular',
  },
});

export default PrescriptionComponent;
