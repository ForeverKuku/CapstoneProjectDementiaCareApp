import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const contacts = [
  { name: 'Jesse Pinkman', role: 'Caregiver', phone: '0785617388', image: require('../img/female.jpg') },
  { name: 'Parkinson Park', role: 'Psychiatrist', phone: '0783431312', image: require('../img/man1.jpg') },
  { name: 'James', role: 'Son', phone: '0783431312', image: require('../img/man2.jpg') },
  { name: 'Alice', role: 'Sister', phone: '0783431312', image: require('../img/me.jpg') },
  { name: 'Jeremiah', role: 'Brother', phone: '0783431312', image: require('../img/jerry.jpg') },
  { name: 'Peterson', role: 'Psychiatrist', phone: '0783431312', image: require('../img/maledoctor.jpg') },
];

const Call = ({navigation}) => {
  const handleCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} scrollEnabled={false}>
      <View style={styles.container}>
        <Text style={styles.header}>Emergency Contacts</Text>
        {contacts.map((contact, index) => (
          <TouchableOpacity
            key={index}
            style={styles.contact}
            onPress={() => handleCall(contact.phone)}>
            <View style={styles.contactInfo}>
              <View style={styles.contactImageContainer}>
                <Image style={styles.contactImage} source={contact.image} />
              </View>
              <View style={styles.contactDetails}>
                <Text style={styles.contactName}>{contact.name}</Text>
                <Text style={styles.contactRole}>{contact.role}</Text>
              </View>
              <Icon name="phone" size={20} color="#d8bfd8" /> 
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contact: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items horizontally
  },
  contactImageContainer: {
    marginRight: 10,
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contactDetails: {
    flex: 1, // Take up remaining space
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactRole: {
    fontSize: 16,
    color: '#666',
  },
});

export default Call;
