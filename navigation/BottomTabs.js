import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../src/screens/Home';
import Facebook from '../src/screens/Facebook';

const BottomTabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <>
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            style: {
              borderTopWidth: 0,
              elevation: 0,
              ...styles.shadow,
            },
            showLabel: false,
            keyboardHidesTabBar: true,
          }}
        >
            {/* <Tab.Screen 
            name={'Facebook'}
            component={Facebook}
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      source={require('../assets/cart1.png')}
                      resizeMode="contain"
                      style={{
                        width: 30,
                        height: 30,
                        tintColor: focused ? 'blue' : 'gray',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 11,
                        alignSelf: 'center',
                        color: focused ? 'blue' : 'gray',
                      }}>
                      FaceBook
                    </Text>
                  </View>
                ),
              }}
            /> */}
            <Tab.Screen 
            name={'Home'}
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      source={require('../assets/cart1.png')}
                      resizeMode="contain"
                      style={{
                        width: 30,
                        height: 30,
                        tintColor: focused ? 'blue' : 'gray',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 11,
                        alignSelf: 'center',
                        color: focused ? 'blue' : 'gray',
                      }}>
                      Home
                    </Text>
                  </View>
                ),
              }}
            />
        </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({
    shadow: {
      shadowColor: 'gray',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
  });

export default BottomTabs;