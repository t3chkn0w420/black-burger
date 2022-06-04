import React, { useState, useContext } from 'react';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createStackNavigator} from '@react-navigation/stack';

import RegisterScreen from '../../screens/RegisterScreen';
import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/HomeScreenn';

import { AuthContext } from '../../context/auth';
import HeaderTabs from '../Header/HeaderTabs';

import Account from '../../screens/Account';
import Post from '../../screens/Post';
import Links from '../../screens/Links';

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const NavigationScreen = ({ navigation }) => {
   const [ state, setState ] = useContext(AuthContext);
   // const authenticated = state && state.token !== "" && state.user !== null;
   const authenticated = state && state.token !== "" && state.user !== "";
   
   return (
         <Stack.Navigator initialRouteName='Home'>
            {authenticated ? 
               (
                  <>
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerRight: () => <HeaderTabs /> }} /> 
                    <Stack.Screen name="Account" component={Account} /> 
                    <Stack.Screen name="Post" component={Post} /> 
                    <Stack.Screen name="Links" component={Links} /> 
                  </>
               
             )  : (
                     <>
                        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                     </>
               )}
         </Stack.Navigator>
   )
}

export default NavigationScreen;