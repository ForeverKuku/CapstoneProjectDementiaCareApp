// CalendarScreen.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen({ navigation }) {
  const [markedDates, setMarkedDates] = useState({});

  const handleDayPress = (day) => {
    // Navigate to the ReminderScreen with the selected date
    navigation.navigate('ReminderScreen', { selectedDate: day.dateString });
  };

  // Example: Assume reminders are stored in state as { "2024-04-24": { title: "Meeting" } }
  const reminders = {
    // Replace with your actual reminders data
    "2024-04-24": { title: "Meeting" },
    // Add more reminders as needed
  };

  // Mark dates with reminders
  const markedDatesWithReminders = {};
  Object.keys(reminders).forEach((date) => {
    markedDatesWithReminders[date] = { marked: true, dotColor: 'red' };
  });

  return (
    <View>
      <Text>Select a date:</Text>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{ ...markedDates, ...markedDatesWithReminders }}
      />
    </View>
  );
}
