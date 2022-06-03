import 'react-native-gesture-handler';

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import {View, Image} from 'react-native';

import { Bottom1, Bottom2, Bottom3, Bottom4  } from '../screens/Bottom';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
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
            tabBarHeight: 60, 
            tabBarType: 'zoomInOut',
            style: {
                activeBackgroundColor: "#ccc",
                tabBarType: 'zoomInOut',
                // zIndex: 8 ,
                // borderTopColor: '#666666',
                // backgroundColor: 'transparent',
                // elevation: 5,
                // padding: 10,
                // marginTop: 20
          },
        },
    headerStyle: {
            height: 80,
            width: 60,
            tabBarActiveTintColor: '#e91'
          },
        tabBarLabelStyle: {
              fontSize: 12,
              // fontWeight: 'bold',
              // padding: 5,
              margin: 5,
          },
          tabBarStyle: {
              backgroundColor: '#000',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderRadius: 20,
              width: 380,
              elevation:5,
              marginLeft: 7,
              height: 75,
              // paddingTop: 15,
              marginBottom: 2,
              // paddingBottom: 55
                    }
            }}
    >
           
           <Tab.Screen name="Favorites" component={Bottom1} screenOptions={{ headerShown: false}} options={{ tabBarIcon: ({ color, size }) => (
              <Image source={require('../asset/icons/fav.png')} style={{
                width: 35,
                height: 35,
                tintColor: 'white'
              }}></Image>
            ) }}/>
      
      
           <Tab.Screen name="Cart" component={CartScreen} options={{ tabBarIcon: ({ color, size, focused }) => (
              <Image source={require('../asset/icons/cart.png')} style={{
                width: 35,
                height: 35,
                tintColor: 'white'
              }}></Image>
            ),
            navigationOptions: { title: 'Bottom1 Screen' } }}/>
      
      
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View
                style={{
                  height: 70,
                  width: 75,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#000',
                  borderColor: '#fff',
                  borderWidth: 3,
                  borderRadius: 30,
                  top: -25,
                  elevation: 10,
                }}>
              <Image source={require('../asset/icons/homes.png')} style={{
                  width: 35,
                  height: 35,
                  tintColor: 'white',
            }}></Image>
            </View>
          ),
        }}
      />
      
      
      
      <Tab.Screen
        name="Notification"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({color}) => (
      <Image source={require('../asset/icons/notification.png')} style={{
                width: 35,
                height: 35,
                tintColor: 'white'
              }}></Image>
          ),tabBarBadge: 3,
        }}
      />
      
      
      <Tab.Screen
        name="Settings"
        component={Bottom4}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={require('../asset/icons/settings.png')} style={{
              width: 35,
              height: 35,
              tintColor: 'white'
            }}></Image>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
