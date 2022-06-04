
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Dimensions, StyleSheet, StatusBar, Image } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import DetailsScreen from './src/screens/DetailsScreen';

import BottomNavigator from './src/navigation/BottomNavigator';
import Colors from './src/constants/Colors';

import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'

import { AuthProvider } from './src/context/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { height, width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = height * 0.9;

const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <AuthProvider>
               {/* <Stack.Screen name="Splash" component={SplashScreen} />
               <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
               <Stack.Screen name="Login" component={LoginScreen} screenOptions={{ headerShown: false }} />
               <Stack.Screen name="Register" component={RegisterScreen} screenOptions={{ headerShown: false }} />
               <Stack.Screen name="Home" component={BottomNavigator} screenOptions={{ headerShown: false }} />
               {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
            </AuthProvider>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
