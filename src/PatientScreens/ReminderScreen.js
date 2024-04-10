import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ReminderScreen({ route }) {
  const { selectedDate } = route.params;
  const [reminderTitle, setReminderTitle] = useState('');
  const [savedReminder, setSavedReminder] = useState(null);

  const handleSaveReminder = () => {
    // Save the reminder (e.g., to local storage or a database)
    // Implement your logic to save the reminder

    // Update the saved reminder state
    setSavedReminder(reminderTitle);
    setReminderTitle('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a reminder for {selectedDate}:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter reminder title"
        value={reminderTitle}
        onChangeText={setReminderTitle}
      />
      <Button title="Save Reminder" onPress={handleSaveReminder} />

      {/* Display saved reminder */}
      {savedReminder && (
        <Text style={styles.savedReminder}>
          Reminder for {selectedDate}: {savedReminder}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  savedReminder: {
    fontSize: 16,
    color: 'green',
  },
});
