import { StyleSheet, Text, View ,Image ,Button, TouchableOpacity} from 'react-native'
import { FullWindowOverlay } from 'react-native-screens';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 import AntDesign from 'react-native-vector-icons/AntDesign';
 import Feather from 'react-native-vector-icons/Feather';
 import Entypo from 'react-native-vector-icons/Entypo';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 import Fontisto from 'react-native-vector-icons/Fontisto';
 import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { TextInput } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PatientProfile from './PatientProfile';


export default function EditPatientProfile({navigation}) {
    
  return (
    <View>
       
      <View style={{alignItems:'center',paddingHorizontal:20,paddingTop:30}}>
      <View>
<Image source={require('../img/pht.jpg')} style={{width:200,height:210,borderRadius:99}} />  
<Feather name='edit' size={30} color="red" style={{backgroundColor:"black",position:'absolute', right:-5, top:130}}/>
      </View>
      </View>
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