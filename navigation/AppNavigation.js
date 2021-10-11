import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../src/screens/Home';
import Clock from '../src/screens/Clock';
import Menu from '../src/screens/Menu';
import Notification from '../src/screens/Notification';
import BottomTabs from './BottomTabs';
import TopTabs from './TopTabs';
import MyDrawer from './MyDrawer';
import Facebook from '../src/screens/Facebook';
import Whatsapp from '../src/screens/Whatsapp';
import Instagram from '../src/screens/Instagram';
import Youtube from '../src/screens/Youtube';
import Twitter from '../src/screens/Twitter';
import Snapchat from '../src/screens/Snapchat';


const Stack = createStackNavigator();

const AppNavigation = (props) =>{
    return(
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="MyDrawer"
                        component={MyDrawer}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="BottomTabs"
                        component={BottomTabs}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="TopTabs"
                        component={TopTabs}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="Home"
                        component={Home}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="Menu"
                        component={Menu}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="Clock"
                        component={Clock}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="Notification"
                        component={Notification}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="Facebook"
                        component={Facebook}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="Whatsapp"
                        component={Whatsapp}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="Instagram"
                        component={Instagram}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="Youtube"
                        component={Youtube}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="Snapchat"
                        component={Snapchat}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="Twitter"
                        component={Twitter}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppNavigation;
