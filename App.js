import React from 'react';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigation } from './src/navigation';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <ThemeProvider>
    <NavigationContainer> 
    <MainNavigation/>
    </NavigationContainer>
    </ThemeProvider>
  );
}

export default StackNavigation;
