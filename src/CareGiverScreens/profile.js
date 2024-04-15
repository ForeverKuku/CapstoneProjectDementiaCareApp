import { StyleSheet, Text, View ,Image ,Button, TouchableOpacity} from 'react-native'
import React from 'react'
import { FullWindowOverlay } from 'react-native-screens'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 import AntDesign from 'react-native-vector-icons/AntDesign';
 import Feather from 'react-native-vector-icons/Feather';
 import Entypo from 'react-native-vector-icons/Entypo';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 
export default function CareGiverProfile() {
  return (
    <View>
        <View style={{alignItems:'center',paddingHorizontal:20,paddingTop:30}}>
          <View style={{height:30}}></View>
      <Text style={{fontSize:20,fontWeight:'bold'}}>profile</Text>
      </View>
      <View style={{alignItems:'center',paddingHorizontal:20,paddingTop:30}}>
      
<Image source={require('../img/pht.jpg')} style={{width:200,height:210,borderRadius:99}} />  
      </View>
<View style={{paddingHorizontal:20,alignItems:'center',paddingTop:20}}>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Mary Brown</Text>
    <Text style={{fontSize:18,fontWeight:'bold'}}>Patient</Text>
</View>

<View style={{paddingHorizontal:20,paddingTop:20,display:'flex',flexDirection:'row',alignItems:'baseline',gap:40}}>
      <MaterialIcons name="contact-page" size={30} color="#000"  style={{paddingStart:70,}}/>
      <Text style={{fontSize:18}}>Female</Text>
    </View>
    <View style={{paddingHorizontal:20,paddingTop:10,display:'flex',flexDirection:'row',alignItems:'baseline',gap:30}}>
      <AntDesign name="calendar" size={30} color="#000"  style={{paddingStart:70,}}/>
      <Text style={{fontSize:18}}>June 16 1960</Text>
    </View>
    <View style={{paddingHorizontal:20,paddingTop:10,display:'flex',flexDirection:'row',alignItems:'baseline',gap:30}}>
      <Feather name="phone" size={30} color="#000"  style={{paddingStart:70,}}/>
      <Text style={{fontSize:18}}>0788543223</Text>
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
    
    alignItems: 'center',
    paddingTop:30
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