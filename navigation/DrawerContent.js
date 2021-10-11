import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../src/screens/Home';


const DrawerContent = (props) => {
  const navigation = useNavigation();

  const drawerItem = (icon, aspectRatio, title, screenName) => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            screenName == 'Home'
              ? navigation?.navigate('Home')
              : screenName == 'Menu'
              ? navigation?.navigate('Menu')
              : screenName == 'Chat'
              ? navigation?.navigate('Chat')
              : screenName == 'Notification'
              ? navigation?.navigate('Notification')
              : screenName == 'Clock'
              ? navigation?.navigate('Clock')
              : screenName == 'Helpline'
              ? Linking.openURL(`tel:${'0331 2285347'}`)
              : null;
          }}>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 60,
            }}>

            <Image
              source={icon}
              style={{width: 20, height: 20}}
            />

            <Text
              style={{
                fontSize: 25,
                color: 'black',
                fontWeight: 'semi-bold',
                marginLeft: 14,
              }}>
            {title}
            </Text>
            
          </View>
          {/* <View
            style={{
              borderBottomColor: '#E92B2C',
              borderBottomWidth: 1,
              marginVertical: 12,
            }}
            >
            </View> */}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <DrawerContentScrollView {...props}>

        <View style={{marginTop: -10}} >
               <ImageBackground
               source={require('../assets/bg2.png')}
               style={{ width: 300, height: 200 }} />

          <View style={{marginTop: -40}}></View>

          <Image
            source={require('../assets/user.png')}
            style={{
                position:'absolute',
                borderRadius: 100,
                marginTop: 70,
                marginLeft: 100,
                height: 50,
                width: 50,
                alignContent: 'center',
                borderWidth: 1,
                borderColor: 'black',
            }}
            
          />
          {/* <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {props?.myState?.user?.name}
          </Text> */}
          </View>
          {/* <TouchableOpacity
            onPress={() => {
              navigation?.navigate('Profile');
            }}
            activeOpacity={0.8}> */}
              
            <View>
              <Text
                style={{
                  color: 'white', fontSize: 20, fontWeight: 'semi-bold', marginLeft: 90, marginTop: -20}}>
                User Name
              </Text>
              <Text
                style={{
                  color: 'white', fontSize: 20, fontWeight: 'semi-bold',marginLeft: 50,}}>
                User-Name@gmail.com
              </Text>
              {/* <MaterialCommunityIcons
                name={'account-edit'}
                size={20}
                color={'white'}
              /> */}
            </View>
          {/* </TouchableOpacity> */}

          <View style={{marginTop: 50}}></View>

        <View>
        <View
          style={{flexDirection: 'row', borderWidth: 1 , width: 400, marginBottom: 10}}
          >

          </View>
          

        {drawerItem(
          require('../assets/home.png'),
          0.87,
          'Home',
          'Home',
        )}
        <View
          style={{flexDirection: 'row', borderWidth: 1 , width: 400, marginBottom: 10}}
          >

          </View>
       
        {drawerItem(
           require('../assets/chat.png'),
          0.99,
          'Chat',
          'Chat',
        )}
        <View
          style={{flexDirection: 'row', borderWidth: 1 , width: 400, marginBottom: 10}}
          >

          </View>
         {drawerItem(
           require('../assets/clock.png'),
          0.99,
          'Clock',
          'Clock',
        )}
        <View
          style={{flexDirection: 'row', borderWidth: 1 , width: 400, marginBottom: 10}}
          >

          </View>
         {drawerItem(
             require('../assets/menu.png'),
           1.11,
          'Menu',
          'Menu',
        )}
        <View
          style={{flexDirection: 'row', borderWidth: 1 , width: 400, marginBottom: 10}}
          >

          </View>
        {drawerItem(
           require('../assets/notification.png'),
          0.99,
          'Notification',
          'Notification',
        )}
       <View
          style={{flexDirection: 'row', borderWidth: 1 , width: 400, marginBottom: 10}}
          >

          </View>
        {drawerItem(
           require('../assets/helpline.png'),
          0.99,
          'Helpline',
          'Helpline',
        )}
        <View
          style={{flexDirection: 'row', borderWidth: 1 , width: 400, marginBottom: 10}}
          >

          </View>

        </View>
        {/* <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
          >
          <View style={{marginTop: 20}}></View>
          <Image
            source={ require('../assets/home.png')}
            style={{aspectRatio: 2.1, height: 80}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                props.SignOut();
              }}
              activeOpacity={0.8}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconAntDesign name={'logout'} color={'#E92B2C'} size={14} />
              <Text style={{color: '#E92B2C', fontWeight: 'bold'}}>
                {' '}
                Logout
              </Text>
            </TouchableOpacity>

            <View style={{marginHorizontal: 10}}></View>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => props?.navigation?.navigate('Aboutus')}>
              <IconAntDesign name={'user'} color={'#E92B2C'} size={14} />
              <Text style={{color: '#E92B2C'}}>About us</Text>
            </TouchableOpacity>
          </View>
        </View> 
        <View style={{marginTop: 10}}></View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('PrivacyPolicy')}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: '#E92B2C',
              borderBottomColor: '#E92B2C',
              borderBottomWidth: 1,
            }}>
            Privacy Policy
          </Text>
          <View style={{marginTop: 20}}></View>
        </TouchableOpacity> */}
        
      </DrawerContentScrollView>
    </>
  );
};

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//   },
//   userInfoSection: {
//     paddingLeft: 20,
//   },
//   title: {
//     fontSize: 16,
//     marginTop: 3,
//     fontWeight: 'bold',
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//   },
//   row: {
//     marginTop: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   section: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   paragraph: {
//     fontWeight: 'bold',
//     marginRight: 3,
//   },
//   drawerSection: {
//     marginTop: 15,
//   },
//   bottomDrawerSection: {
//     marginBottom: 15,
//     borderTopColor: '#f4f4f4',
//     borderTopWidth: 1,
//   },
//   preference: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
// });

export default DrawerContent;