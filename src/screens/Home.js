import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// const navigation = useNavigation();

const Home = () => {
  return(
    <View style={{backgroundColor: 'lightblue', flex: 1}}>
    <View style={{marginTop: 20 , padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{color: 'darkgrey', fontSize: 20}}>
        Friday, 15 Dec
      </Text>
      <Image 
      source={require('../../assets/loupe.png')}
      style={{resizeMode: 'contain', size: 20 ,height: 20}}
      />
    </View>
    <View style={{margin: 20}}>
      <Text style={{fontWeight: 'bold', fontSize: 40}}>
        Top 6 Applications
      </Text>
      <Text style={{ fontSize: 20}}>
        Choose the right app for you!
      </Text>
    </View>
    <ScrollView>
    <View style={{padding: 10}}>
      <TouchableOpacity 
      // onPress={() => navigation?.navigate('Facebook')}
      style={{backgroundColor:'#3b5998', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{padding: 30}}>
        <Text style={{color:'white' , fontSize: 40, fontWeight: 'bold'}}>
          Facebook
        </Text>
        <Text style={{color:'white' , fontSize: 20,}}>
        Social Platform
        </Text>
        </View>
        <View style={{padding: 30}}>
          <Image source={require('../../assets/FB.png')}
          style={{ width: 70, height:70}}/> 
        </View>

      </TouchableOpacity>
    </View>
    <View style={{padding: 10}}>
      <TouchableOpacity style={{backgroundColor:'#34bf49', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{padding: 30}}>
        <Text style={{color:'white' , fontSize: 40, fontWeight: 'bold'}}>
          Whatsapp
        </Text>
        <Text style={{color:'white' , fontSize: 20,}}>
        Social Platform
        </Text>
        </View>
        <View style={{padding: 30}}>
          <Image source={require('../../assets/WA.png')}
          style={{ width: 60, height:60}}/> 
        </View>

      </TouchableOpacity>
    </View>
    <View style={{padding: 10}}>
      <TouchableOpacity style={{backgroundColor:'#bc2a8d', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{padding: 30}}>
        <Text style={{color:'white' , fontSize: 40, fontWeight: 'bold'}}>
          Instagram
        </Text>
        <Text style={{color:'white' , fontSize: 20,}}>
        Social Platform
        </Text>
        </View>
        <View style={{padding: 30}}>
          <Image source={require('../../assets/IG.png')}
          style={{ width: 60, height:60}}/> 
        </View>

      </TouchableOpacity>
    </View>
    <View style={{padding: 10}}>
      <TouchableOpacity style={{backgroundColor:'#bb0000', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{padding: 30}}>
        <Text style={{color:'white' , fontSize: 40, fontWeight: 'bold'}}>
          Youtube
        </Text>
        <Text style={{color:'white' , fontSize: 20,}}>
        Social Platform
        </Text>
        </View>
        <View style={{padding: 30}}>
          <Image source={require('../../assets/YT.png')}
          style={{ width: 60, height:60}}/> 
        </View>

      </TouchableOpacity>
    </View>
    <View style={{padding: 10}}>
      <TouchableOpacity style={{backgroundColor:'#00aced', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{padding: 30}}>
        <Text style={{color:'white' , fontSize: 40, fontWeight: 'bold'}}>
          Twitter
        </Text>
        <Text style={{color:'white' , fontSize: 20,}}>
        Social Platform
        </Text>
        </View>
        <View style={{padding: 30}}>
          <Image source={require('../../assets/TT.png')}
          style={{ width: 60, height:60}}/> 
        </View>

      </TouchableOpacity>
    </View><View style={{padding: 10}}>
      <TouchableOpacity style={{backgroundColor:'#FEE227', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{padding: 30}}>
        <Text style={{color:'white' , fontSize: 40, fontWeight: 'bold'}}>
          Snapchat
        </Text>
        <Text style={{color:'white' , fontSize: 20,}}>
        Social Platform
        </Text>
        </View>
        <View style={{padding: 30}}>
          <Image source={require('../../assets/SC.png')}
          style={{ width: 60, height:60}}/> 
        </View>

      </TouchableOpacity>
    </View>
    </ScrollView>
    
    </View>
  )
}

export default Home;