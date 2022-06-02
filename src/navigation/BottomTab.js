import 'react-native-gesture-handler';
import React, { Component } from 'react'

import { Text, Image, StyleSheet, View, Dimensions, StatusBar } from 'react-native'

const { height, width } = Dimensions.get('window');
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Bottom1, Bottom2, Bottom3, Bottom4, Bottom5  } from '../screens/Bottom';
import DrawerNavigator from './DrawerNavigator';
import HomeScreen from '../screens/HomeScreen';

const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

const Tab = createBottomTabNavigator();

export default function BottomTab ({ state, descriptors, navigation }) {
    // const focusedOptions = descriptors[state.routes[state.index].key].options;
    // if (focusedOptions.tabBarVisible === false) {
    //   return null;
    // }
        return (
        <Tab.Navigator  
            initialRouteName="Home"
            borderRadius="50"
                screenOptions= {{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: '#000', 
                    
                    // tabBarOptions:{
                    //   tabBarHeight: 70,
                    //   tabBarType: 'light',
                    //   inactiveTintColor: 'grey',
                    //   activeTintColor: '#000000',
                    //   tabBarBackgroundColor: '#ffffff',
                    // }
                  tabBarOptions:{
                    tabBarType: 'dark',
                    tabBarHeight: 70, 
                    tabBarType: 'zoomInOut',
                    style: {
                        activeBackgroundColor: "#ccc",
                        tabBarType: 'zoomInOut',
                        zIndex: 8 ,
                        borderTopColor: '#666666',
                        backgroundColor: 'transparent',
                        elevation: 0,
                        padding: 10,
                        marginTop: 20
                  },
                },
            headerStyle: {
                    height: 80,
                    width: 60,
                    tabBarActiveTintColor: '#e91'
                  },
                tabBarLabelStyle: {
                      fontSize: 14,
                    //  backgroundColor: '#f43',
                    //  borderRadius: 100
                  },
                  tabBarStyle: {
                      backgroundColor: '#000',
                      borderTopRightRadius: 60,
                      borderTopLeftRadius: 60,
                      borderRadius: 20,
                      width: 380,
                      elevation: 5,
                      marginLeft: 7,
                      height: 80,
                      paddingTop: 15,
                      marginBottom: 2,
                      // paddingBottom: 55
                            }
                    }}
            >

          <Tab.Screen name="Bottom1" component={Bottom1} options={{ tabBarIcon: ({ color, size, focused }) => (
              <Image source={require('../assets/icons/cart.png')} style={{
                width: 30,
                height: 30,
                tintColor: 'white',
                // color: 'blue',
                // backgroundColor: '#f34',
                // borderRadius: '20'
              }}></Image>
            ),
            // color={ focused ? '#fff' : '#090'}
            navigationOptions: { title: 'Bottom1 Screen' } }}/>
            
            
            <Tab.Screen name="Bottom2" component={Bottom2} options={{ tabBarIcon: ({ color, size }) => (
              <Image source={require('../assets/icons/search.png')} style={{
                width: 30,
                height: 30,
                // color: 'blue',
                tintColor: 'white',
                inActiveTintColor: '#f34'
                // backgroundColor: '#f34',
                // borderRadius: '20'
              }}></Image>
            ), navigationOptions: { title: 'Bottom 2' } }}/>
          
          <Tab.Screen name="Home" component={HomeScreen} screenOptions={{ headerShown: false}} options={{ tabBarIcon: ({ color, size }) => (
              <Image source={require('../assets/icons/home3.png')} style={{
                width: 30,
                height: 30,
                // color: 'blue',
                tintColor: 'white',
                inActiveTintColor: '#f34'
                // backgroundColor: '#f34',
                // borderRadius: '20'
              }}></Image>
            ) }}/>
            
          
          <Tab.Screen name="Bottom3" component={Bottom3} options={{ tabBarIcon: ({ color, size }) => (
              <Image source={require('../assets/icons/bell.png')} style={{
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
            navigationOptions: { title: 'Bottom3' } }}/>
          
          <Tab.Screen name="Bottom4" component={Bottom4} options={{ tabBarIcon: ({ color, size }) => (
              <Image source={require('../assets/icons/settings.png')} style={{
                width: 30,
                height: 30,
                // color: 'blue',
                tintColor: 'white',
                inActiveTintColor: '#f34'
                // backgroundColor: '#f34',
                // borderRadius: '20'
              }}></Image>
            ), navigationOptions: { title: 'Bottom4' } }}/>
            </Tab.Navigator>
        )
}

const styles = StyleSheet.create({
    con: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: 'black'
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        height: 40,
        width: 40,
        borderRadius: 20,
    }
})