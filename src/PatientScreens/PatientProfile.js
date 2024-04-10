import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const PatientProfile = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      // Implement your sign-out logic here
      await firebaseAuth.signOut();
      navigation.navigate('SignIn');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <View style={styles.container}>
     <Image
  style={styles.profileImage}
  source={require('../img/pht.jpg')}
/>

      <Text style={styles.name}>Becca Wilson</Text>
      <Text style={styles.email}>becca@example.com</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Icon name="envelope" size={20} color="gray" />
          <Text style={styles.detailText}>becca@example.com</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="birthday-cake" size={20} color="gray" />
          <Text style={styles.detailText}>January 1, 1990</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    marginTop: -50,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 18,
    color: 'gray',
  },
  detailsContainer: {
    width: '90%',
    marginTop: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'gray',
  },
  logoutButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PatientProfile;
