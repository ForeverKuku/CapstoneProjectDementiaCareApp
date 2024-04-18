import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { AntDesign } from '@expo/vector-icons';

const MyCalendar = () => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row',gap:100,marginHorizontal:10}}>
            <AntDesign name="arrowleft" size={30} color="black"/>
            <Text style={{fontSize:24}}>Calendar</Text>
        </View>
        <View style={{height:70}}></View>
      <Calendar
        
     />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,

  },
});

export default MyCalendar;
