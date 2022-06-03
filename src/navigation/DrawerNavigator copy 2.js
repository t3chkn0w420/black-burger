import React, { useState, useRef } from 'react';
import { Button, Animated, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Drawer1, Drawer2, Drawer3 } from '../screens/Drawer';
import HomeScreen from '../screens/HomeScreen';
import CustomSidebarMenu from '../componentss/CustomSidebarMenu';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
          <Drawer.Navigator
             marginBottom={50}
            screenOptions={{
               padding: 20,
               marginTop: 50,
               marginBottom: 50,
              headerShown: 'false',
              title: '',
              
              headerStyle: {
                backgroundColor: '#000',
                height: 80,
                borderRadius: 20,
                borderBottomRightRadius: 60,
                borderBottomLeftRadius: 60
              },
                headerTintColor: 'yellow', 

                headerTitleStyle: {
                  fontWeight: 'bold', 
                }
            }}
            drawerContentOptions={{
              activeTintColor: '#e91e63',
              itemStyle: { marginVertical: 5 },
            }}
            drawerContent={(props) => <CustomSidebarMenu {...props} />}>
            
              <Drawer.Screen name="Home" component={HomeScreen} options={{
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