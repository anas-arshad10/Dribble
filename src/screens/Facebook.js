import React from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import TopTabs from '../../navigation/TopTabs';
import Input from './Input';
// import VideoPlayer from './VideoPlayer'

 const Facebook = () => {
    return (
        <View style={{backgroundColor:'#242527', flex: 1}}>

            <View style={{marginTop: 10 ,marginLeft:- 140 , flexDirection: 'row', justifyContent: 'space-between'}}>

                <Image source={require('../../assets/fblogo.jpg')}
                style={{resizeMode: 'contain', size: 40 , height: 40}}/>

            <View style={{flexDirection: 'row', marginLeft:-40,}}>
                <TouchableOpacity>
                    <Image source={require('../../assets/search.png')}
                    style={{resizeMode: 'contain', width:35 ,height: 35}}/>
                </TouchableOpacity>
            </View>

            <View style={{marginRight:10,marginLeft:-55}}>
                <TouchableOpacity>
                    <Image source={require('../../assets/msngr.png')}
                    style={{resizeMode: 'contain', width: 35 ,height: 35}}/>
                </TouchableOpacity>
            </View>

            </View>
            <View style={{ height: 45}}>
            <TopTabs></TopTabs>
            </View>
            <View style={{borderWidth:0.5, Width:'100%' , alignItems:'center', justifyContent: 'center', borderColor: '#66676A'}}></View>

        < View style={{flexDirection: 'row',marginTop: 15, marginLeft: 15}}>
        <Image style={{borderRadius: 100 , width:60 , height:60}}
        source={require('../../assets/dp.jpg')}>
        </Image>

        <Input >
        </Input>
        
        </View>

        <View style={{ marginTop: 10, borderWidth:0.5, Width:'100%' , alignItems:'center', justifyContent: 'center', borderColor: '#66676A'}}></View>

        
        < View style={{ flexDirection: 'row', marginTop:15, marginLeft:60 }}>

            <Image style={{resizeMode:'contain', width: 18 ,height:18}}
            source={require('../../assets/live.png')}>
            </Image>
            <Text style={{paddingLeft:8, color: 'white'}}>Live</Text>
            <View style={{paddingLeft:40, borderRightWidth:1, height:'120%', borderColor:'#66676A'}}></View>

            
            <Image style={{resizeMode: 'contain', width: 18 ,height:18,marginLeft:30}}
            source={require('../../assets/photos.png')}>
            </Image>
            <Text style={{paddingLeft:8, color: 'white'}}> Photos</Text>
            
            <View style={{paddingLeft:40, borderRightWidth:1 ,height:'120%', borderColor:'#66676A'}}></View>
            
            
            <Image style={{resizeMode: 'contain', width: 18 ,height:18, marginLeft:30}}
            source={require('../../assets/rooms.png')}>
            </Image>
            <Text style={{paddingLeft:8, color: 'white'}}>Rooms </Text>
        </View>

        <View style={{ marginTop: 10, borderWidth:5, Width:'100%' , alignItems:'center', justifyContent: 'center', borderColor: '#18191B'}}></View>
        
        
        <View style={{flexDirection: 'row', marginTop:10}}>
            
            <ScrollView horizontal={true}>
            <View>
            <Image style={{borderRadius: 15, width: 125, height:200, marginLeft:10}}
            source={require('../../assets/dp.jpg')}>
            </Image>
            <Image style={{resizeMode:'contain',marginTop: -110 ,marginLeft: 45, width: 55, height:55}}
            source={require('../../assets/story.png')}>
            </Image>
            <Text style={{marginTop:35 , marginLeft: 40, color:'white'}}>
                Create Story
            </Text>
            </View>

            <View>
            <Image style={{borderRadius: 15, width: 125, height:200, marginLeft:10}}
            source={require('../../assets/status1.jpg')}> 
            </Image>
            <Text style={{marginTop:-20 , marginLeft: 40, color:'white'}}>
            Ali Nadeem
            </Text>
            <Image style={{ marginLeft: 18, marginTop: -190, borderRadius: 50 , width: 45, height:45}}
            source={require('../../assets/dp1.jpg')}>
            </Image>
            </View>

            <View>
            <Image style={{borderRadius: 15, width: 125, height:200, marginLeft:10}}
            source={require('../../assets/status2.jpg')}> 
            </Image>
            <Text style={{marginTop:-20 , marginLeft: 40, color:'white'}}>
            Arham Khan
            </Text>
            <Image style={{ marginLeft: 18, marginTop: -190, borderRadius: 50 , width: 45, height:45}}
            source={require('../../assets/dp2.jpg')}>
            </Image>
            </View>

            <View>
            <Image style={{borderRadius: 15, width: 125, height:200, marginLeft:10}}
            source={require('../../assets/status3.jpg')}> 
            </Image>
            <Text style={{marginTop:-20 , marginLeft: 40, color:'white'}}>
            Aryan Rajput
            </Text>
            <Image style={{ marginLeft: 18, marginTop: -190, borderRadius: 50 , width: 45, height:45}}
            source={require('../../assets/dp3.jpg')}>
            </Image>
            </View>

            <View>
            <Image style={{borderRadius: 15, width: 125, height:200, marginLeft:10}}
            source={require('../../assets/status4.jpg')}> 
            </Image>
            <Text style={{marginTop:-20 , marginLeft: 40, color:'white'}}>
            Faizan Ul Haq
            </Text>
            <Image style={{ marginLeft: 18, marginTop: -190, borderRadius: 50 , width: 45, height:45}}
            source={require('../../assets/dp4.jpg')}>
            </Image>
            </View>

            <View>
            <Image style={{borderRadius: 15, width: 125, height:200, marginLeft:10}}
            source={require('../../assets/status5.jpg')}> 
            </Image>
            <Text style={{marginTop:-20 , marginLeft: 40, color:'white'}}>
            Hamza Sultan
            </Text>
            <Image style={{ marginLeft: 18, marginTop: -190, borderRadius: 50 , width: 45, height:45}}
            source={require('../../assets/dp5.png')}>
            </Image>
            </View>

            <View>
            <Image style={{borderRadius: 15, width: 125, height:200, marginLeft:10}}
            source={require('../../assets/status6.jpg')}> 
            </Image>
            <Text style={{marginTop:-20 , marginLeft: 40, color:'white'}}>
            Huzaifa Ashraf
            </Text>
            <Image style={{ marginLeft: 18, marginTop: -190, borderRadius: 50 , width: 45, height:45}}
            source={require('../../assets/dp6.jpg')}>
            </Image>
            </View>

            <View>
            <Image style={{borderRadius: 15, width: 125, height:200, marginLeft:10}}
            source={require('../../assets/status7.jpg')}> 
            </Image>
            <Text style={{marginTop:-20 , marginLeft: 40, color:'white'}}>
            Rayan Javaid
            </Text>
            <Image style={{ marginLeft: 18, marginTop: -190, borderRadius: 50 , width: 45, height:45}}
            source={require('../../assets/dp7.jpg')}>
            </Image>
            </View>

            <View>
            <Image style={{borderRadius: 15, width: 125, height:200, marginLeft:10}}
            source={require('../../assets/status8.jpg')}> 
            </Image>
            <Text style={{marginTop:-20 , marginLeft: 40, color:'white'}}>
            Rohaan Ayyub
            </Text>
            <Image style={{ marginLeft: 18, marginTop: -190, borderRadius: 50 , width: 45, height:45}}
            source={require('../../assets/dp8.png')}>
            </Image>
            </View>

            <View>
            <Image style={{borderRadius: 15, width: 125, height:200, marginLeft:10}}
            source={require('../../assets/status9.jpg')}> 
            </Image>
            <Text style={{marginTop:-20 , marginLeft: 40, color:'white'}}>
            Xobeen Khan
            </Text>
            <Image style={{ marginLeft: 18, marginTop: -190, borderRadius: 50 , width: 45, height:45}}
            source={require('../../assets/dp9.jpg')}>
            </Image>
            </View>

            <View>
            <Image style={{borderRadius: 15, width: 125, height:200, marginLeft:10}}
            source={require('../../assets/status10.jpg')}> 
            </Image>
            <Text style={{marginTop:-20 , marginLeft: 40, color:'white'}}>
            Zarar Khan
            </Text>
            <Image style={{ marginLeft: 18, marginTop: -190, borderRadius: 50 , width: 45, height:45}}
            source={require('../../assets/dp10.jpg')}>
            </Image>
            </View>
            </ScrollView>
        </View>
        <View style={{ marginTop: 10, borderWidth:5, Width:'100%' , alignItems:'center', justifyContent: 'center', borderColor: '#18191B'}}></View>
        <View style={{flexDirection:'row'}}>

            <Image style={{borderRadius: 25, width: 50, height:50, margin:10}}
            source={require('../../assets/nawaz.jpg')}> 
            </Image>
            <Text style={{color:'white', margin:10, marginTop:15}}>
                Nawazuddin Siddiqui
            </Text>
            <Text style={{color:'#B0B4B8', marginLeft:-120, marginTop:30}}> Mar 20 </Text>
            <Image style={{borderRadius: 25,resizeMode: 'contain', width: 10, height:10, marginTop:34,marginLeft:5}}
            source={require('../../assets/globe.png')}> 

            </Image>
            <Image style={{borderRadius: 25, resizeMode: 'contain', width: 15, height:15, marginLeft:60,marginTop:15}}
            source={require('../../assets/tick.png')}> 

            </Image>
            <Image style={{borderRadius: 25, resizeMode: 'contain', width: 20, height:20, marginLeft:160,marginTop:15}}
            source={require('../../assets/dots.png')}> 

            </Image>

        </View>
        <View>
            {/* <Image /> */}
            {/* <VideoPlayer>
                
            </VideoPlayer> */}
        </View>
        

        </View>
    )
}

export default Facebook ; 
