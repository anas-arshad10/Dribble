import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../src/screens/Home';
import Clock from '../src/screens/Clock';
import Menu from '../src/screens/Menu';
import Chat from '../src/screens/Chat';
import Notification from '../src/screens/Notification';

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
            {<Tab.Screen 
            name={'Clock'}
            component={Clock}
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      source={require('../assets/clock.png')}
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
                      Clock
                    </Text>
                  </View>
                ),
              }}
            />}
            {<Tab.Screen 
            name={'Chat'}
            component={Chat}
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      source={require('../assets/chat.png')}
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
                      Chat
                    </Text>
                  </View>
                ),
              }}
            />}
            <Tab.Screen 
            name={'Home'}
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      source={require('../assets/home.png')}
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
            <Tab.Screen 
            name={'Notification'}
            component={Notification}
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      source={require('../assets/notification.png')}
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
                      Notification
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen 
            name={'Menu'}
            component={Menu}
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      source={require('../assets/menu.png')}
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
                      Menu
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