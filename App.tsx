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

import Login from './src/pages/Login';
import allStudent from './src/pages/allStudent';
import Header from './src/components/Constants/Header';

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name='Login' component = {Login} options={{headerShown:false ,presentation: "modal"}}/>
      <Stack.Screen name='allStudent' component={allStudent} />
    </Stack.Navigator>
  </NavigationContainer>
);
}



export default App;
