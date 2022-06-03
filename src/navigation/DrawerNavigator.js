import React, { useState, useRef } from 'react';
import { Button, Animated, Image, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Drawer1, Drawer2, Drawer3 } from '../screens/Drawer';
import HomeScreen from '../screens/HomeScreen';
import CustomSidebarMenu from '../componentss/CustomSidebarMenu';
import BottomTab from './BottomTab';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
          <Drawer.Navigator
            screenOptions={{
              headerShown: true,
              headerTransparent: true,
              headerShadowVisible: true,
              // headerShown: 'false',
               paddingTop: 50,
               marginBottom: 50,
               title: '',
              headerTitle: (props) => (
                <Image
                    resizeMode='center'
                    style={{width: 180, height: 60, marginLeft: 280, resizeMode: 'contain'}}
                    source={require('../assets/images/logo.png')}
                />
            ),
            headerTintColor: 'transparent',
            headerTitleContainerStyle: {justifyContent: 'center', alignItems: 'center'},
              headerStyle: {
                backgroundColor: 'transparent',
                shadowOpacity: 0,
                borderBottomWidth: 0,
                height: 60,
                // borderRadius: 60,
                // borderBottomRightRadius: 50,
                // borderBottomLeftRadius: 0
              },
                headerTintColor: 'black', 
                headerTitleStyle: {
                  fontWeight: 'bold', 
                },
                headerBackTitleStyle: {
                  color: 'transparent',
              },
              headerBackTitleVisible: false,
            }}
            drawerContentOptions={{
              activeTintColor: '#e91e63',
              itemStyle: { marginVertical: 5 },
            }}
            
            drawerContent={(props) => <CustomSidebarMenu {...props} />}>
            
              <Drawer.Screen name="Home" component={BottomTab} options={{
                drawerLabel: 'Home Screen'
              }} />
              
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
  );
}