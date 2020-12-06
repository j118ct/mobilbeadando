import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Kezdolap';
import Etlap from './src/Etlap';
import Elerhetoseg from './src/Elerhetoseg';
import Ettermeink from './src/Ettermeink';
import Terkep from './src/Terkep';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Screen name="Kezdőlap" component={HomeScreen} />
          <Stack.Screen name="Étlap" component={Etlap} />
          <Stack.Screen name="Elérhetőség" component={Elerhetoseg} />
          <Stack.Screen name="Éttermeink" component={Ettermeink} />
          <Stack.Screen name="Térkép" component={Terkep} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
