import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions} from 'react-native';
import DrawerContent from './DrawerContent';
import Home from '../src/screens/Home';
import BottomTabs from './BottomTabs';

export default function MyDrawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerPosition={'right'}
      drawerStyle={{
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.9,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        top: Dimensions.get('window').height * 0.025,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
        //   headerShown: false,
          title: 'Social Media',
          headerStyle: {backgroundColor: '#40B5AD'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: '600'},
        }}
      />
    </Drawer.Navigator>
  );
}