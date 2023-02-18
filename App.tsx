/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native'; 
import Login from './src/pages/Login';
import allStudent from './src/pages/allStudent';

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Login' component = {Login} />
      <Stack.Screen name='allStudent' component={allStudent} />
    </Stack.Navigator>
  </NavigationContainer>
);
}



export default App;
