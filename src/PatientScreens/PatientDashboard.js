import React,  { useState, useEffect } from 'react';
import { View, Text, StyleSheet,  TouchableOpacity, Image, ScrollView, Button, SafeAreaView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Feather from 'react-native-vector-icons/Feather'; 
import Fontisto from 'react-native-vector-icons/Fontisto';


const MindGameCard = ({ game, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image source={game.image} style={styles.gameImage} />
      <Text style={styles.gameName}>{game.name}</Text>
    </TouchableOpacity>
  );
};

const PatientDashboard = ({navigation}) => {
  const dailyRoutinesData = [
    { time: '8:00 AM', task: 'Morning walk' },
    { time: '12:30 PM', task: 'Lunch' },
    { time: '3:00 PM', task: 'Medication' },
    { time: '5:00 PM', task: 'Bible Study' },
  ];

  const mindGamesData = [
    { id: '1', name: 'Sudoku', image: require('../img/sudoku.png') },
    { id: '2', name: 'Crossword Puzzle', image: require('../img/puzzle.png') },
    { id: '3', name: 'Memory Game', image: require('../img/mindgame.jpg') },
    // Add more games as needed
  ];

  const memoriesData = [
    { id: '1', name: 'Hannah', image: require('../img/me.jpg') },
    { id: '2', name: 'GrandMa & Kids', image: require('../img/family.jpg') },
    { id: '3', name: 'James Birthday', image: require('../img/birthday.jpg') },
    { id: '4', name: 'Nana', image: require('../img/mother.jpg') },
    { id: '5', name: 'Hannah Graduation', image: require('../img/grad.jpg') },
    { id: '6', name: 'James & Nana 6', image: require('../img/son.jpg') },
    { id: '7', name: 'James', image: require('../img/man2.jpg') },
    // Add more memories as needed
  ];

  const medicationsData = [
    { id: '1', name: 'Aspirin', dosage: '1 tablet daily' },
    { id: '2', name: 'Lisinopril', dosage: '10 mg once a day' },
  ]


  const renderRoutineItem = ({ item }) => (
    <Text style={styles.routineText}>
      {item.time}: {item.task}
    </Text>
  );

  const renderGameItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigate('MindGame', { game: item })}>
      <Text style={styles.gameText}>{item.name}</Text>
    </TouchableOpacity>
  );
  
  const onDayPress = () => {
    navigation.navigate('CalendarScreen');
  };

  const handleMindGamesPress = (gameName) => {
    navigation.navigate('MindGameScreen', { gameName });
  };

  const handleMedicationPress = () => {
    navigation.navigate('MedicationManagementScreen');
  };

  const handleDailyRoutinePress = () => {
    navigation.navigate('DailyRoutineScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.calendarTitle}>Reminder</Text>
        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={(day) => {
              console.log('Selected day:', day);
              onDayPress(); 
            }}
            markedDates={{
              // Mark specific dates as needed (e.g., appointments)
              '2024-04-10': { marked: true, dotColor: 'red' },
              '2024-04-15': { marked: true, dotColor: 'green' },
            }}
            theme={{
              backgroundColor: '#f9f9f9',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#333333',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#0064D5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#0064D5',
              dayTextColor: '#333333',
            }}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {mindGamesData.map(game => (
    <MindGameCard
      key={game.id}
      game={game}
      onPress={() => handleMindGamesPress(game.name)}
    />
  ))}
</ScrollView>
      <View>
      <Text style={styles.sectionTitles}>Health & Wellness Hub</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Daily Routines section */}
        <View style={styles.routines}>
  <Text style={styles.subTitle}>Daily Routines</Text>
  {dailyRoutinesData.map((routine) => (
    <Text key={routine.time}>
      {routine.time}: {routine.task}
    </Text>
  ))}
   <TouchableOpacity onPress={handleDailyRoutinePress}>
          <Text>Click</Text>
        </TouchableOpacity>
</View>

        <View style={styles.medications}>
        <Text style={styles.subTitle}>Medication Management</Text>
          {medicationsData.map((medication) => (
            <Text key={medication.name}>
              {medication.name} – {medication.dosage}
            </Text>
          ))}
           <TouchableOpacity onPress={handleMedicationPress}>
          <Text>Go to Medications Management</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
      <View>
      <Text style={styles.sectionTitle}>Memories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {memoriesData.map((memory) => (
      <TouchableOpacity key={memory.id} style={styles.cardContainer} onPress={() => navigate('Memory', { memory })}>
        <Image source={memory.image} style={styles.gameImage} />
        <Text style={styles.gameName}>{memory.name}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
      </View>
</ScrollView>
</SafeAreaView>
    );
    }
    

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    flexGrow: 1,
  },
  greetingContainer: {
    padding: 16,
    backgroundColor: '#26282C',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  greetingText: {
    color: 'white',
    fontSize: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  icon: {
    color: '#333333',
  },
  calendarContainer: {
    padding: 8, 
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginBottom: 10,
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:20
  },
  sectionTitles:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:20
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666666',
    marginBottom: 8,
  },

  cardContainer: {
    marginRight: 10, 
  },
  gameImage: {
    width: 100, 
    height: 100, 
    borderRadius: 8,
  },
  gameName: {
    marginTop: 8, 
    fontSize: 14, 
  },
  routines: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#CCCCCC',
    paddingRight: 32,
    marginRight: 16,
  },
  medications: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    paddingLeft: 32,
    marginLeft: 16,
  },
  sectionContainer: {
    padding: 16,
  },
  location: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    borderRadius: 4,
    marginBottom: 16,
  },
  voice: {
    backgroundColor: '#d3d3d3',
    padding: 16,
    borderRadius: 4,
  },
   buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PatientDashboard;