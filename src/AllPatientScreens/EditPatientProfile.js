import { StyleSheet, Text, View ,Image ,Button, TouchableOpacity,Pressable} from 'react-native'
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
import { storage } from '../../FirebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';


export default function EditPatientProfile({navigation}) {

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
  
  const saveToStorage =async(imgUri)=>{
    try {
      if(!imgUri){
        alert("Please select an image")
      }
      else{
        const timeSaved =Date.now()

        const photo= await fetch(imgUri)
        const blobbedPhoto = await photo.blob()

        const path =`profilePictures/${timeSaved}`

        const metaData={
          contentType:'image/jpeg'
        };

        const imagRef=ref(storage,path)

        const upload= await uploadBytes(imagRef,blobbedPhoto,metaData)

        console.log(upload);


        var hostedlink=await getDownloadURL(imagRef) 


      }
      
    } catch (error) {
      console.log(error)
      
    }

  }

     
    
  return (
    <View>
       
       <Pressable onPress={handleChangeProfile} style={{ alignItems: 'center', borderRadius:99, width: 200, height: 200,alignSelf:'center',marginTop:25 }}>

<Image source={{uri: image}} style={{ width:'100%',height:'100%', borderRadius: 99 }} />
<Feather name='edit' size={30} color="red" style={{backgroundColor:"black",position:'absolute', right:-5, top:130}}/>

</Pressable>
      <View style={{paddingLeft:50}}>
      </View>
    <View style={{paddingLeft:50,paddingTop:20,width:350}}>
        <TextInput
        
        placeholder=' your Full Name :'
        
        />
        </View>
        <View style={{paddingLeft:50,paddingTop:20,width:350}}>
         <TextInput
        
        placeholder=' Gender :'
        
        />
        </View>
        <View style={{paddingLeft:50,paddingTop:20,width:350}}>
         <TextInput
            style={styles.textInput}
        placeholder=' Date :'
        
        />
    </View>
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('PatientProfile')}>
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
    paddingTop:60,
  },
  button: {
    backgroundColor: '#d8bfd8',
    padding: 10,
    borderRadius: 5,
    width:180,
    padding:20,
    height:60,
    alignItems:'center'
  },
  buttonText: {
    height:30,
     textAlign:'center',
    
    
    fontSize: 16,
  },
});