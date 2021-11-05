import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Speakers from "./screens/Speakers";
import Headsets from "./screens/Headsets";
import Laptops from "./screens/Laptops";
import Phones from "./screens/Phones";

 
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator InitailRouteName="Login">
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name ="Speakers" component={Speakers}/>
      <Stack.Screen name ="Headsets" component={Headsets}/>
      <Stack.Screen name ="Laptops" component={Laptops}/>
      <Stack.Screen name ="Phones" component={Phones}/>
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
