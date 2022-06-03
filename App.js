// import 'react-native-gesture-handler';
// import React from 'react';
// import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';

// import {NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// // import {createStackNavigator} from '@react-navigation/stack';

// import SplashScreen from './src/screens/SplashScreen';
// import OnboardingScreen from './src/screens/OnboardingScreen';
// import HomeScreen from './src/screens/HomeScreen';

// import BottomTab from './src/navigation/BottomTab';
// import DrawerNavigator from './src/navigation/DrawerNavigator';

// const { height, width } = Dimensions.get('window');
// // const ITEM_WIDTH = width * 0.9;
// // const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

// // const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{headerShown: false}}>
//             <Stack.Screen name="Home" component={DrawerNavigator} screenOptions={{headerShown: false}} options={{ headerShown: false}} />
//             <Stack.Screen name="Splash" component={SplashScreen} />
//             <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            
//         </Stack.Navigator>
//       </NavigationContainer>
//   );
// };

// export default App;
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from './src/components/Home';
import Details from './src/components/Details';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
