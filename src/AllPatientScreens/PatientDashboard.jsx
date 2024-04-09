import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isLandscape = width > 500; 

const MindGameCard = ({ game, onPress }) => {
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
        <Image source={game.image} style={styles.gameImage} />
        <Text style={styles.gameName}>{game.name}</Text>
      </TouchableOpacity>
    );
  };
const PatientDashboard = () => {
  const dailyRoutines = [
    { time: '8:00 AM', task: 'Morning walk' },
    { time: '12:30 PM', task: 'Lunch' },
    { time: '3:00 PM', task: 'Medication' },
    { time: '5:00 PM', task: 'Bible Study' },
  ];

  const mindGames = [
    { id: '1', name: 'Sudoku', image: require('../img/sudoku.png') },
    { id: '2', name: 'Crossword Puzzle', image: require('../img/puzzle.png') },
    { id: '3', name: 'Memory Game', image: require('../img/mindgame.jpg') },
    // Add more games as needed
  ];

  const medications = [
    { id: '1', name: 'Aspirin', dosage: '1 tablet daily' },
    { id: '2', name: 'Lisinopril', dosage: '10 mg once a day' },
  ]

  const handleMedicationPress = () => {
    navigation.navigate('Medications'); 
  };

  return (
    <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.greeting}>Good morning, Sarah 👋</Text>
    </View>
    <ScrollView style={styles.scrollContainer}>
      {/* Calendar */}
      <View style={styles.calendar}>
        <Calendar
          onDayPress={(day) => {
            console.log('Selected day:', day);
            // Handle the selected day (e.g., navigate to details)
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
            textDisabledColor: '#d9e1e8',
            dotColor: '#0064D5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'blue',
            indicatorColor: 'blue',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontSize: 12,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 12,
          }}
        />
      </View>

      {/* Daily Routines */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Daily Routines</Text>
          {dailyRoutines.map((routine, index) => (
            <Text key={index} style={styles.routineText}>
              {routine.time}: {routine.task}
            </Text>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mind-Stimulating Games</Text>
          <FlatList
            data={mindGames}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MindGameCard
                game={item}
                onPress={() => route.params.navigate('MindGame', { game: item })}
              />
            )}
          />
        </View>
      </View>

      {/* Medications Management */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Medications</Text>
        <FlatList
          data={medications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={handleMedicationPress}>
              <Text style={styles.medicationText}>
                {item.name} - {item.dosage}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  </ScrollView>
);
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
      },
      header: {
        padding: 20,
        backgroundColor: '#d8bfd8', 
        borderBottomWidth: 1,
        borderBottomColor: '#dedede',
      },
      greeting: {
        fontSize: 20, 
        color: '#ffffff',
        fontWeight: 'bold', 
        textAlign: 'center',
      },
      calendar: {
        marginHorizontal: isLandscape ? 20 : 16, 
        marginTop: 20,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#ffffff',
        overflow: 'hidden',
      },
      section: {
        padding: 20,
        backgroundColor: '#ffffff',
        margin: 16,
        borderRadius: 10, 
        elevation: 2, 
      },
      sectionTitle: {
        fontSize: 18, 
        fontWeight: 'bold',
        marginBottom: 15, 
      },
      routineText: {
        fontSize: 16, 
        marginBottom: 8, 
        color: '#4b0082', 
      },
      cardContainer: {
        backgroundColor: '#fafafa',
        borderRadius: 8,
        padding: isLandscape ? 8 : 6, 
        alignItems: 'center',
        marginBottom: 8, 
        elevation: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#eee',
    },
    gameImage: {
        width: isLandscape ? 40 : 30, 
        height: isLandscape ? 40 : 30, 
        marginRight: 8, 
        borderRadius: isLandscape ? 20 : 15, 
    },
    gameName: {
        fontSize: isLandscape ? 14 : 12, 
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
    },
      medicationText: {
        fontSize: 16, 
        color: '#4b0082', 
        marginBottom: 5, 
      },
});

export default PatientDashboard;
