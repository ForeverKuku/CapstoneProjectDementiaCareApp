import React, { useState, useRef } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView,Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const VerificationCodeInput = ({navigation}) => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const navigate=useNavigation

  const handleChangeText = (text, index) => {
    if (text.length <= 1) {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

     
      if (text.length === 1 && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleVerify = () => {
    const enteredCode = code.join('');
    
    if (enteredCode.length === 4) {
      
      console.log('Verifying code:', enteredCode);
    } else {
      console.log('Please enter a 4-digit code.');
    }
    navigation.navigate('CreateAccount')
  };

  return (
    <SafeAreaView>
    <View style={{marginTop:50}}>
        <View style={{height:30}}></View>
        <Text style={{textAlign:'center',color:'grey',fontSize:20}}>Verification</Text>
        <View style={{height:30}}></View>
        <Text style={{textAlign:'center',fontSize:20}}>We send you an </Text>
        <Text style={{textAlign:'center',fontSize:20}}>SMS code </Text>
        <View style={{height:65}}></View>
      <View style={styles.codeContainer}>
        {[0, 1, 2, 3].map((index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChangeText(text, index)}
            value={code[index]}
            autoFocus={index === 0}
          />
        ))}
      </View>
      <View style={{height:100}}></View>
      <View style={styles.buttonclick}>
        <TouchableOpacity onPress={handleVerify}>
      <Text style={{textAlign:'center',fontSize:22,color:'white'}}>Next</Text>
      </TouchableOpacity>
      </View>
      <View style={{height:55}}></View>
      <Text style={{textAlign:'center'}}>Didn't receive code</Text>
      <View style={styles.textnow}>
      <TouchableOpacity>
      <Text style={{textAlign:'center',fontSize:18,color:'white'}}>Resend code</Text>
      </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    textnow:{
        backgroundColor: '#40A2E3',
        marginHorizontal:120,
        height:60,
        paddingTop:15,borderRadius:14,
    },
    buttonclick:{
      backgroundColor: '#40A2E3',
      marginHorizontal:60,
      height:60,
      paddingTop:15,borderRadius:14,
    },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    height: 80,
    width: 60,
    borderColor: '#DDDDDD',
    backgroundColor: '#DDDDDD',
    borderWidth: 1,
    marginHorizontal: 12,
    textAlign: 'center',
  },
});

export default VerificationCodeInput;
