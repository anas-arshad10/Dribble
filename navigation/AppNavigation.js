import React from 'react';
import { View } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../src/screens/Home';
import Facebook from '../src/screens/Facebook';

const Stack = createStackNavigator();

const AppNavigation = (props) =>{
    return(
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="Home"
                        component={Home}
                        option={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="Facebook"
                        component={Facebook}
                        option={{headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppNavigation;
