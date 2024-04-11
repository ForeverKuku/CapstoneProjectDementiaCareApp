import { StyleSheet, Text, View ,Image ,Button, TouchableOpacity} from 'react-native'
import React, { useContext } from 'react'
import { FullWindowOverlay } from 'react-native-screens'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 import AntDesign from 'react-native-vector-icons/AntDesign';
 import Feather from 'react-native-vector-icons/Feather';
 import Entypo from 'react-native-vector-icons/Entypo';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 import Fontisto from 'react-native-vector-icons/Fontisto';
 import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import EditPatientProfile from './EditPatientProfile';


 
export default function PatientProfile({navigation}) {
    
  return (
    <View>
       
      <View style={{alignItems:'center',paddingHorizontal:20,paddingTop:30}}>
      
<Image source={require('../img/pht.jpg')} style={{width:200,height:210,borderRadius:99}} />  
      </View>
<View style={{paddingHorizontal:20,alignItems:'center',paddingTop:20}}>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Mary Brown</Text>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Patient</Text>
</View>
<View style={{paddingHorizontal:20,paddingTop:20}}>
  <TouchableOpacity   onPress={() =>navigation.navigate(EditPatientProfile)}>
    <Text style={{paddingStart:170,fontSize:18,color:'red'}}>Edit</Text>
  </TouchableOpacity>
</View>

<View style={{paddingHorizontal:20,paddingTop:20,display:'flex',flexDirection:'row',alignItems:'baseline',gap:40}}>
      <MaterialIcons name="contact-page" size={30} color="#000"  style={{paddingStart:100,}}/>
      <Text style={{fontSize:18}}>Female</Text>
    </View>
    <View style={{paddingHorizontal:20,paddingTop:30,display:'flex',flexDirection:'row',alignItems:'baseline',gap:30}}>
      <AntDesign name="calendar" size={30} color="#000"  style={{paddingStart:100,}}/>
      <Text style={{fontSize:18}}>June 16 1960</Text>
    </View>
    <View style={{paddingHorizontal:20,paddingTop:30,display:'flex',flexDirection:'row',alignItems:'baseline',gap:30}}>
    <Fontisto name="toggle-off" size={30} color="#000" style={{paddingStart:100,}}/>
    <Text style={{fontSize:18}}>Dark Mode</Text>
    </View>
    
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} >
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