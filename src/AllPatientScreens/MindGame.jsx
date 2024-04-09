// MindGameScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MindGame = ({ navigation }) => {
  const startGame = () => {
    // Logic to start the mind game
    // You can navigate to the actual game screen here
    // For example:
    navigation.navigate('GamePlay');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mind Game</Text>
      <TouchableOpacity onPress={startGame} style={styles.startButton}>
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#0064D5',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MindGame;
