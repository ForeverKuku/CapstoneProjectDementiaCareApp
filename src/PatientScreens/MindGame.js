import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const gamesData = [
  {
    id: '1',
    title: 'Sudoku',
    icon: require('../img/sudoku.png'),
  },
  {
    id: '2',
    title: 'Crossword Puzzle',
    icon: require('../img/puzzle.png'),
  },
  {
    id: '3',
    title: 'Memory Game',
    icon: require('../img/mindgame.jpg'),
  },
];

const GameListItem = ({ game, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(game.id)}>
      <Image source={game.icon} style={styles.gameIcon} />
      <Text style={styles.gameTitle}>{game.title}</Text>
    </TouchableOpacity>
  );
};

const MindGamesScreen = ({ navigation }) => {
  const handleGamePress = (gameId) => {
    if (gameId === '1') {
      navigation.navigate('SudokuScreen');
    } else if (gameId === '2') {
      navigation.navigate('CrosswordScreen');
    } else if (gameId === '3') {
      navigation.navigate('MemoryGameScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mind Stimulating Games</Text>
      {gamesData.map((game) => (
        <GameListItem key={game.id} game={game} onPress={handleGamePress} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    marginTop: 30,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 16,
  },
  gameIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  gameTitle: {
    fontSize: 16,
  },
});

export default MindGamesScreen;
