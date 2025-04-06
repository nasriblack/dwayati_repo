import { Pill } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IMedication } from '../../api/src/models/medication.model';
import { getExpirationColor } from '../utils/getExpirationColor';

type Props = {
  medications: IMedication[] | undefined;
};

const MedicationComponent = ({ medications }: Props) => {
  return (
    <>
      {medications?.length &&
        medications?.map((item) => (
          <TouchableOpacity key={item.id} style={styles.resultItem}>
            <Pill
              size={20}
              color={getExpirationColor(item.expirationDate as string)}
            />
            <Text style={styles.resultText}>{item.name}</Text>
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

export default MedicationComponent;
