
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Dimensions, StyleSheet, StatusBar, Image } from 'react-native';

import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import DetailsScreen from './src/screens/DetailsScreen';

import Navigation from './src/components/Navigation/Navigation';

const { height, width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = height * 0.9;

export default function App() {
  return (
      <Navigation />        
  );
};

