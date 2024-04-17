import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Pressable,Modal } from 'react-native'
import { FullWindowOverlay } from 'react-native-screens';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { TextInput } from 'react-native-paper';

import { launchCameraAsync, requestMediaLibraryPermissionsAsync, launchImageLibraryAsync } from 'expo-image-picker';
import { db, storage } from '../../FirebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { Picker } from '@react-native-picker/picker';






export default function EditPatientProfile({ navigation }) {

  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [gender, setGender] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
    setModalVisible(false);
  };
  
  const handleAddDoc = async () => {
    try {
      const response = await addDoc(collection(db, 'Profile'), {
        Name: name,
        Date: date,
        Gender: gender
      });
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  }

  

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



  return (
    <View>

      <Pressable onPress={handleChangeProfile} style={{ alignItems: 'center', borderRadius: 99, width: 200, height: 200, alignSelf: 'center', marginTop: 75 }}>

        <Image source={{ uri: image }} style={{ width: '100%', height: '100%', borderRadius: 99 }} />
        <Feather name='camera' size={30} color="white" style={{ backgroundColor: "black", position: 'absolute', right: -2, top: 130 }} />

      </Pressable>
     
   

       <View style={{ paddingLeft: 50, paddingTop: 20, width: 350 }}>
      <TextInput
        placeholder='Name'
        value={name}
        onChangeText={setName}
      />
      </View>
      <View style={{ paddingLeft: 50, paddingTop: 10, width: 350 }}>
      <TextInput
        placeholder='Date'
        mode="date"
        value={date}
        onChangeText={setDate}
      />
      </View>

      <View style={{ paddingLeft: 50, paddingTop: 10, width: 350 }}>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Select Gender"
        editable={false} // Prevent manual editing
        value={gender}
        onChangeText={setGender}
      />
      <Button title="Select Gender" onPress={() => setModalVisible(true)} />
      
      {/* Modal for Gender Selection */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <TouchableOpacity onPress={() => handleGenderChange('Male')}>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGenderChange('Female')}>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGenderChange('Other')}>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>Other</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ fontSize: 18, color: 'red' }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
   

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{
          handleAddDoc();
          navigation.navigate('PatientProfile')
        }}>
          <Text style={styles.buttonText}>Save</Text>
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
    paddingTop: 60,
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
});