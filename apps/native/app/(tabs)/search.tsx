/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Search as SearchIcon, Pill, ClipboardList } from 'lucide-react-native';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState('medications');

  const itemsTab = [
    {
      tabName: 'medications',
      icon: <Pill size={20} color="#fff" />,
    },
    {
      tabName: 'prescriptions',
      icon: <ClipboardList size={20} color="#fff" />,
    },
  ];

  return (
    <LinearGradient colors={['#1a1b1e', '#2d2e32']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
      </View>

      <View style={styles.searchContainer}>
        <SearchIcon color="#666" size={20} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search medications or prescriptions..."
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.filterContainer}>
        {itemsTab.map((item) => {
          const isTabActive = selectedItem === item.tabName;
          //TODO: MAKE A FUNCTION THAT RETURN THE ICON BASED ON THE TAB NAME !
          return (
            <TouchableOpacity
              style={
                isTabActive
                  ? [styles.filterButton, styles.activeFilter]
                  : [styles.filterButton]
              }
              key={item.tabName}
              onPress={() => {
                setSelectedItem(item.tabName);
              }}
            >
              {item.icon}
              <Text
                style={
                  isTabActive
                    ? [styles.filterText, styles.activeFilterText]
                    : [styles.activeFilterText]
                }
              >
                {item.tabName}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.resultHeader}>Recent Searches</Text>
        {['Ibuprofen', 'Amoxicillin', 'Allergy Medicine'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.resultItem}>
            <Pill size={20} color="#666" />
            <Text style={styles.resultText}>{item}</Text>
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
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'PlusJakartaSans_700Bold',
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 20,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    height: 48,
    color: '#fff',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    borderWidth: 0,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 12,
  },
  activeFilter: {
    backgroundColor: '#4a90e2',
  },
  filterText: {
    marginLeft: 8,
    color: '#666',
    fontFamily: 'Inter_600SemiBold',
  },
  activeFilterText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  resultHeader: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    marginBottom: 16,
  },
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
