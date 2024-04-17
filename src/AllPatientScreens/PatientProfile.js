import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { FullWindowOverlay } from 'react-native-screens'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { launchCameraAsync, requestMediaLibraryPermissionsAsync, launchImageLibraryAsync } from 'expo-image-picker';
import { storage } from '../../FirebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../FirebaseConfig';



export default function PatientProfile({ navigation }) {
  const [Profile, setProfile] = useState([]);

  const fetch = async () => {
    try {
      const docRef = await getDocs(collection(db, "Profile"))
      const data = []
      const docSnapShop = docRef.forEach((doc) => data.push(doc.data()))
      setProfile(data)
      console.log(data)
    } catch (error) {
      console.error(error);
    }

  }
  useEffect(() => {
    fetch()
  }, [])

  const [image, setImage] = useState('https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?cs=srgb&dl=pexels-min-an-675920.jpg&fm=jpg')



  const handleChangeProfile = async () => {
    try {
      await requestMediaLibraryPermissionsAsync()
      const result = await launchImageLibraryAsync({
        aspect: [1, 1],
        quality: 1,
        allowsEditing: true,
        allowsMultipleSelection: true
      });
      if (!result.canceled) {
        setImage(result.assets[0].uri);
        saveToStorage(result.assets[0].uri)
      }
    } catch (error) {
      console.error(error);
    }
  }

  const saveToStorage = async (imgUri) => {
    try {
      if (!imgUri) {
        alert("Please select an image")
      }
      else {
        const timeSaved = Date.now()


        const photo = await fetch(imgUri)
        const blobbedPhoto = await photo.blob()

        const path = `profilePictures/${timeSaved}`

        const metaData = {
          contentType: 'image/jpeg'
        };

        const imagRef = ref(storage, path)

        const upload = await uploadBytes(imagRef, blobbedPhoto, metaData)

        console.log(upload);


        var hostedlink = await getDownloadURL(imagRef)


      }

    } catch (error) {
      console.log(error)

    }

  }


  const handleLogout = () => {
    AsyncStorage.removeItem('userToken');
    navigation.replace('SignIn');
  }


  const [isDarkMode, setIsDarkMode] = useState(false);

   // Load the user's preferred theme from AsyncStorage on component mount
   useEffect(() => {
    loadTheme();
  }, []);

  // Function to toggle between light and dark mode
  const toggleDarkMode = async () => {
    setIsDarkMode((prevMode) => !prevMode); // Toggle the state
    saveTheme(!isDarkMode); // Save the updated theme preference to AsyncStorage
  };

  // Function to save the theme preference to AsyncStorage
  const saveTheme = async (isDark) => {
    try {
      await AsyncStorage.setItem('isDarkMode', JSON.stringify(isDark));
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
  };

  // Function to load the theme preference from AsyncStorage
  const loadTheme = async () => {
    try {
      const themePreference = await AsyncStorage.getItem('isDarkMode');
      setIsDarkMode(themePreference === 'true');
    } catch (error) {
      console.error('Error loading theme preference:', error);
    }
  };


  return (

    <View style={[styles.containers, isDarkMode ? styles.darkContainer : null]}>

      <Pressable onPress={handleChangeProfile} style={{ alignItems: 'center', borderRadius: 99, width: 200, height: 200, alignSelf: 'center', marginTop: 25 }}>

        <Image source={{ uri: image }} style={{ width: '100%', height: '100%', borderRadius: 99 }} />
        <Feather name='camera' size={30} color="white" style={{ backgroundColor: "black", position: 'absolute', right: -2, top: 130 }} />

      </Pressable>
      <View style={{ paddingHorizontal: 20, alignItems: 'center', paddingTop: 20 }}>
        <Text  style={[styles.profileText, isDarkMode && styles.darkText]}>Mary Brown</Text>
        <Text style={[styles.profileText, isDarkMode && styles.darkText]}>Patient</Text>
      </View>
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
          <Text style={{ paddingStart: 170, fontSize: 18, color: 'red' }}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 20, paddingTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: 40 }}>
        <MaterialIcons name="contact-page" size={30} color="#000" style={{ paddingStart: 100, }} />
        <Text  style={[styles.profileText, isDarkMode && styles.darkText]}>Female</Text>
      </View>
      <View style={{ paddingHorizontal: 20, paddingTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: 30 }}>
        <AntDesign name="calendar" size={30} color="#000" style={{ paddingStart: 100, }} />
        <Text style={[styles.profileText, isDarkMode && styles.darkText]}>June 16 1960</Text>
      </View>
      <View style={{ paddingHorizontal: 20, paddingTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: 30 ,  justifyContent: 'center',}}>

        <TouchableOpacity style={styles.toggleButton} onPress={toggleDarkMode}>
        <Text style={styles.toggleButtonText}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</Text>
      </TouchableOpacity>
      </View>
    

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleLogout} >
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: verticalScale(20),
    alignItems: 'center',
    paddingTop: 40,
  },

  containers: {
    flex: 1,
    
    backgroundColor: '#FFFFFF', // Light mode background color
  },
  darkContainer: {
    backgroundColor: '#000000', // Dark mode background color
  },

  button: {
    backgroundColor: '#d8bfd8',
    padding: 10,
    borderRadius: 5,
    width: 180,
    padding: 20,
    height: 60,
    alignItems: 'center'
  },
  buttonText: {
    height: 30,
    textAlign: 'center',
    fontSize: 16,
  },
  toggleButton: {
    
    padding: 10,
    borderRadius: 5,
  },
  toggleButtonText: {
    
    fontSize: 16,
    fontWeight:'bold',
    fontSize: 20
   
  },
  darkText: {
    fontSize: 18,
    color: '#FFFFFF', // Dark mode text color
  },

   profileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000', // Light mode text color
  },

});