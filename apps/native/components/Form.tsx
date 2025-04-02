/* eslint-disable react/react-in-jsx-scope */
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Controller } from 'react-hook-form';
import { format, isValid, parse } from 'date-fns';
import { useState } from 'react';

export const FormField = ({
  control,
  name,
  label,
  rules = {},
  ...props
}: any) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ field: { onChange, value }, fieldState: { error } }) => {
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={[styles.input, error && styles.inputError]}
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#666"
            {...props}
          />
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      );
    }}
  />
);

export const FormDateField = ({ control, name, label, rules = {} }: any) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        // Format the date for display when there's a valid value
        const displayValue = value
          ? format(new Date(value), 'yyyy-MM-dd')
          : inputValue;

        const handleDateChange = (text: string) => {
          setInputValue(text);

          // Validate date format (YYYY-MM-DD)
          const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

          if (dateRegex.test(text)) {
            const parsedDate = parse(text, 'yyyy-MM-dd', new Date());

            // Check if the date is valid
            if (isValid(parsedDate)) {
              // Set time to midnight and store as ISO string
              parsedDate.setHours(0, 0, 0, 0);
              onChange(parsedDate.toISOString());
            }
          } else if (text === '') {
            // Handle empty input
            onChange(null);
          }
        };

        return (
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              style={[styles.input, error && styles.inputError]}
              value={displayValue}
              onChangeText={handleDateChange}
              placeholder="YYYY-MM-DD"
              placeholderTextColor="#666"
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
        );
      }}
    />
  );
};

export const FormSelect = ({
  control,
  name,
  label,
  options,
  rules = {},
}: any) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.selectContainer}>
          {options.map((option: any) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.selectOption,
                value === option.id && styles.selectOptionSelected,
              ]}
              onPress={() => onChange(option.id)}
            >
              <Text
                style={[
                  styles.selectOptionText,
                  value === option.id && styles.selectOptionTextSelected,
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {error && <Text style={styles.errorText}>{error.message}</Text>}
      </View>
    )}
  />
);

export const SubmitButton = ({ onPress, title, loading }: any) => (
  <TouchableOpacity
    style={styles.submitButton}
    onPress={onPress}
    disabled={loading}
  >
    <Text style={styles.submitButtonText}>
      {loading ? 'Loading...' : title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
    fontFamily: 'Inter_600SemiBold',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 12,
    color: '#fff',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
  dateInputContainer: {
    width: '100%',
  },
  inputError: {
    borderColor: '#e2574a',
    borderWidth: 1,
  },
  errorText: {
    color: '#e2574a',
    fontSize: 14,
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
  selectContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  selectOption: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 12,
    minWidth: 100,
  },
  selectOptionSelected: {
    backgroundColor: '#4a90e2',
  },
  selectOptionText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Inter_400Regular',
  },
  selectOptionTextSelected: {
    fontFamily: 'Inter_600SemiBold',
  },
  submitButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
});
