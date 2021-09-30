import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../src/screens/Home';
import Facebook from '../src/screens/Facebook';
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator();

const AppNavigation = (props) =>{
    return(
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="BottomTabs"
                        component={BottomTabs}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="Facebook"
                        component={Facebook}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppNavigation;
