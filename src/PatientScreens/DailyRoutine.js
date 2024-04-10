import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const DailyRoutineScreen = () => {
  const [routine, setRoutine] = useState([
    { task: 'Wake up at 6:00 AM', completed: false },
    { task: 'Exercise for 30 minutes', completed: false },
    { task: 'Have breakfast', completed: false },
    { task: 'Work on project for 3 hours', completed: false },
    { task: 'Take a 1-hour break', completed: false },
    { task: 'Work on project for 3 hours', completed: false },
    { task: 'Have dinner', completed: false },
    { task: 'Relax and unwind', completed: false },
  ]);

  const handleTaskCompletion = (index) => {
    const newRoutine = [...routine];
    newRoutine[index].completed = !newRoutine[index].completed;
    setRoutine(newRoutine);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Routine</Text>
      <View style={styles.routineList}>
        {routine.map((task, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.routineItem,
              task.completed ? styles.completedItem : null,
            ]}
            onPress={() => handleTaskCompletion(index)}
          >
            <Text style={styles.routineText}>{task.task}</Text>
            {task.completed && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  routineList: {
    width: '80%',
  },
  routineItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
  },
  completedItem: {
    backgroundColor: 'green',
  },
  routineText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  checkmark: {
    fontSize: 24,
    color: 'white',
  },
});

export default DailyRoutineScreen;