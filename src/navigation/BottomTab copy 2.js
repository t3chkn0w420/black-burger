import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, StatusBar } from 'react-native'
import ReanimatedCurveTabBar from 'react-native-curved-bottom-tabbar';
const { height, width } = Dimensions.get('window');
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Bottom1, Bottom2, Bottom3, Bottom4, Bottom5  } from '../screens/Bottom';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const ARRAY_LENGTH = 7;

const Screens = [...Array(ARRAY_LENGTH)].map((item, index) =>
    (props) =>
        <View style={{ width, height, backgroundColor: 'eee', alignItems: 'center', justifyContent: 'center' }}>
            <Text>{(index + 1) + ''}</Text>
        </View>
)

export default class BottomTab extends Component {

    render() {
        return (
            <Tab.Navigator
                tabBar={props =>
                    <ReanimatedCurveTabBar
                        {...props}
                        tabColor={'#4527a0'}
                        backgroundColor={'#000070'}
                        reactNaviagtionBar={true}
                        height={175}
                        iconTranslateY={-10}
                        lockTranslateYAnime={true}
                        iconsArray={[...Array(ARRAY_LENGTH)].map((item, index) =>
                            (<View style={styles.icon}>
                                <Text>{index + 1}</Text>
                            </View>)
                        )}
                        allowDropAnime={true}
                    />}
            >
          <Tab.Screen name="Bottom1" component={Bottom1} options={{ tabBarIcon: ({ color, size, focused }) => (
              <Image source={require('../assets/icons/cart.png')} style={{
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
              <Image source={require('../assets/icons/home2.png')} style={{
                width: 30,
                height: 30,
                // color: 'blue',
                tintColor: 'white',
                inActiveTintColor: '#f34'
                // backgroundColor: '#f34',
                // borderRadius: '20'
              }}></Image>
            ), navigationOptions: { title: 'Home' } }}/>
          
          <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => (
              <Image source={require('../assets/icons/home3.png')} style={{
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
            navigationOptions: { title: 'Home' } }}/>
          
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
            ), navigationOptions: { title: 'Home' } }}/>
            </Tab.Navigator>
        )
    }
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