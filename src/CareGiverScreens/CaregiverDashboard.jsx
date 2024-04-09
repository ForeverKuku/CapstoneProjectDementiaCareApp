import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CaregiverDashboard = ({navigation}) => {
return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Good morning, Sarah</Text>
        <Text style={styles.subHeaderText}>Hope a great day ahead</Text>
        <Icon name="bell" size={20} color="#fff" />
        <Icon name="cog" size={20} color="#fff" />
      </View>
      <TextInput style={styles.searchBar} placeholder="Search" />
      <View style={styles.medicineProgress}>
        <Text style={styles.title}>Patient's daily medicine progress</Text>
        <Text style={styles.patientName}>John Doe</Text>
        <Text style={styles.date}>Today, 24 Dec</Text>
        {/* ... Medicine times and icons ... */}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonBlue}>
          <Text style={styles.buttonText}>Add patient</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRed}>
          <Text style={styles.buttonText}>For emergency</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.exerciseSection}>
        <Text style={styles.title}>Mind exercise for patient</Text>
        {/* ... Exercise icons and labels ... */}
      </View>
      <TouchableOpacity style={styles.uploadButton}>
        <Icon name="camera" size={20} color="#fff" />
        <Text style={styles.buttonText}>Upload your special memories</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#d8bfd8s',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  subHeaderText: {
    color: '#fff',
    fontSize: 14,
  },
  searchBar: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    fontSize: 16,
  },
  medicineProgress: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  patientName: {
    fontSize: 16,
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  buttonBlue: {
    backgroundColor: '#0000ff',
    padding: 15,
    borderRadius: 20,
  },
  buttonRed: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 20,
  },
  buttonSecondary: {
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  exerciseSection: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  uploadButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  // Add additional styles for icons and labels as needed
});

export default CaregiverDashboard;