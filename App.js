import React, { useState } from 'react';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigation } from './src/navigation';
import { SharedStateProvider } from './src/SharedStateProvider';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <SharedStateProvider>
      <ThemeProvider>
        <NavigationContainer> 
          <MainNavigation/>
        </NavigationContainer>
      </ThemeProvider>
    </SharedStateProvider>
  );
}

export default StackNavigation;
