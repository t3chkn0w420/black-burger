import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Drawer1, Drawer2, Drawer3 } from '../screens/Drawer';

// Import Custom Sidebar
import CustomSidebarMenu from '../components/CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
  
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="Screen 1"
        component={Drawer1}
        options={{
          title: '', 
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Screen 2"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Screen 2"
        component={Drawer2}
        options={{
          title: 'Second Screen', //Set Header Title
        }}
      />
      <Stack.Screen
        name="Screen 3"
        component={Drawer3}
        options={{
          title: 'Third Screen', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Screen 1"
          options={{ drawerLabel: 'First page Option' }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="Screen 2"
          options={{ drawerLabel: 'Second page Option' }}
          component={secondScreenStack}
        />
      </Drawer.Navigator>
  );
}

export default App;
