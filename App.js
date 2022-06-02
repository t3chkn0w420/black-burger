import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';

import { Drawer1, Drawer2, Drawer3 } from './src/screens/Drawer';
import { Bottom1, Bottom2, Bottom3, Bottom4 } from './src/screens/Bottom';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomTab from './src/navigation/BottomTab';

const {width} = Dimensions.get('screen');

const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{
        title: '',
        headerStyle: {
          backgroundColor: '#000',
          height: 50,
          // width: 240,
        },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          }
      }}>
        <Drawer.Screen name="Drawer1" component={Drawer1} options={{
          drawerLabel: 'Drawer Screen 1'
        }} />
        <Drawer.Screen name="Drawer2" component={Drawer2} options={{
          drawerLabel: 'Drawer Screen 2'
        }} />
        <Drawer.Screen name="Drawer3" component={Drawer3} options={{
          drawerLabel: 'Drawer Screen 3'
        }} />
    </Drawer.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator
       labeled='false'
       initialRouteName='Home'
       borderRadius= '20' 
       activeColor="#f0edf6"
       inactiveColor="#3e2465"
       tintColor="powderblue"
       backgroundColor="#ccc"
       
    screenOptions={{
        tabBarActiveTintColor: '#e51',
        tabBarInactiveTintColor: '#e91',
        marginTop: 20,
        tabBarLabelPosition: 'below-icon',
        
      headerStyle: {
          height: 80,
          // width: 60,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#e91'
        },
        tabBarBackground: () => (
          <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
        ),
        tabBarStyle: { position: 'absolute' },
          // tabBarInactiveTintColor: '#fff',
          // tabBarActiveTintColor: 'red',
        tabBarLabelStyle: { 
          //  tabBarActiveTintColor: '#000',
          tabBarActiveTintColor: '#e51',
          tabBarInactiveTintColor: '#e91',
           fontSize: 24,
           borderTopWidth: 0,
           position: 'absolute',
           elevation: 5,
          },
        // tabBarItemStyle: {
        //    backgroundColor: '#f43',
        //    borderRadius: 100
        // }
       }}
       
    barStyle={{ 
           backgroundColor: '#000', 
           paddingBottom: 5,
           marginBottom: 5,
           borderTopRightRadius: 100,
           borderRadius: 150,
           width: 350,
           elevation: 5,
           marginLeft: 20,
          //  height: 50,
           paddingBottom: 15
      }}
    >
        
        <Tab.Screen name="Bottom1" component={Bottom1} options={{ tabBarIcon: ({ color, size, focused }) => (
            <Image source={require('./src/assets/icons/cart.png')} style={{
              width: 30,
              height: 30,
              tintColor: 'white',
              inActiveTintColor: 'red'
              // color: 'blue',
              // backgroundColor: '#f34',
              // borderRadius: '20'
            }}></Image>
          ),
          // color={ focused ? '#fff' : '#090'}
          navigationOptions: { title: 'Events Screen' } }}/>
          
          
          <Tab.Screen name="Bottom2" component={Bottom2} options={{ tabBarIcon: ({ color, size }) => (
            <Image source={require('./src/assets/icons/home2.png')} style={{
              width: 30,
              height: 30,
              // color: 'blue',
              tintColor: 'white',
              inActiveTintColor: '#f34'
              // backgroundColor: '#f34',
              // borderRadius: '20'
            }}></Image>
          ), navigationOptions: { title: 'Home' } }}/>
        
        <Tab.Screen name="Home" component={MyDrawer} options={{ tabBarIcon: ({ color, size }) => (
            <Image source={require('./src/assets/icons/home3.png')} style={{
              width: 30,
              height: 30,
              // color: 'blue',
              tintColor: 'white',
              inActiveTintColor: '#f34'
              // backgroundColor: '#f34',
              // borderRadius: '20'
            }}></Image>
          ), navigationOptions: { title: 'Home' } }}/>
        
        <Tab.Screen name="Bottom3" component={Bottom3} options={{ tabBarIcon: ({ color, size }) => (
            <Image source={require('./src/assets/icons/bell.png')} style={{
              width: 30,
              height: 30,
              // color: 'blue',
              tintColor: 'white',
              inActiveTintColor: '#f34'
              // backgroundColor: '#f34',
              // borderRadius: '20'
            }}></Image>
          ), 
          tabBarBadge: 3,
          navigationOptions: { title: 'Home' } }}/>
        
        <Tab.Screen name="Bottom4" component={Bottom4} options={{ tabBarIcon: ({ color, size }) => (
            <Image source={require('./src/assets/icons/settings.png')} style={{
              width: 30,
              height: 30,
              // color: 'blue',
              tintColor: 'white',
              inActiveTintColor: '#f34'
              // backgroundColor: '#f34',
              // borderRadius: '20'
            }}></Image>
          ), navigationOptions: { title: 'Home' } }}/>
    </Tab.Navigator>
  );
}

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRoutename="Home" screenOptions={{headerShown: false}}>
            
            <Stack.Screen name="Home" component={BottomTab} />
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
