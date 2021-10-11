import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Bar from '../src/screens/Bar';
import Bell from '../src/screens/Bell';
import Play from '../src/screens/Play';
import People from '../src/screens/People';
import First from '../src/screens/First';

const TopTabs = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <>
        <Tab.Navigator
        tabBarOptions={{
            // activeTintColor: 'white',
            // inactiveTintColor: 'blue',
            style: {
              // borderTopWidth: 0,
              // elevation: 100,
              
              backgroundColor: '#242527',
              ...styles.shadow,
            },
            showLabel: false,
            keyboardHidesTabBar: true,
          }}
        >
            {<Tab.Screen 
            name={'First '}
            component={First}
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      source={require('../assets/homet.png')}
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#2E87FF' : 'gray',
                      }}
                    />
                  </View>
                ),
              }}
            />}
            {<Tab.Screen 
            name={'People'}
            component={People}
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      source={require('../assets/people.png')}
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#2E87FF' : 'gray',
                      }}
                    />
                  </View>
                ),
              }}
            />}
            {<Tab.Screen 
            name={'Play'}
            component={Play}
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      source={require('../assets/play.png')}
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#2E87FF' : 'gray',
                      }}
                    />
                  </View>
                ),
              }}
            />}
            {<Tab.Screen 
            name={'Bell'}
            component={Bell}
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      source={require('../assets/bell.png')}
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#2E87FF' : 'gray',
                      }}
                    />
                  </View>
                ),
              }}
            />}
            {<Tab.Screen 
            name={'Bar'}
            component={Bar}
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      source={require('../assets/bar.png')}
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#2E87FF' : 'gray',
                      }}
                    />
                  </View>
                ),
              }}
            />}
        </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({
    shadow: {
      shadowColor: '#2E87FF',
      shadowOffset: {
        width: 0,
        height: 10,
        borderColor:'#66676B',
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
  });

export default TopTabs;