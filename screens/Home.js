import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Image,TouchableOpacity,ScrollView ,Text, View, ImageBackground,TextInput} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import{Feather} from '@expo/vector-icons';



export default function Home({navigation}) {
  return (
     <ImageBackground
      blurRadius={5}
      style={{flex: 1,alignItems: 'center', height: "100%"}}
      justifyContent={'space-evenly'}
      source={require('../assets/background.jpg')}>
       <View style={{paddingBottom: 10}}>
        <Text style={{fontSize:30, padding:50, color:'violet', marginBottom:30}}>Welcome to Gadgets Store!</Text>
      </View>

     <View style={styles.container}>
      
        <View stlye={{marginBottom:60}}>
        <EvilIcons name="search" size={24} color="black" />
        </View>
        <View style={{flex:7,alignContent:'flex-start'}}>
        <TextInput style={{color:'black'}} placeholder='Search here'/>
        </View>
        <TouchableOpacity>
        <View style={{flex:1}}>
        <Feather name="menu" size={24} color="black" />
        </View>
        </TouchableOpacity>
      </View>


      <View style={{height:"60%",maargin: 10, width: "90%", justifyContent: "center", alignItems: "center"}}>
      <ScrollView >
        
    <View style={{flexDirection:'row',marginBottom:20, paddingTop:20,}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Headsets")}>
      <View style={{marginEnd:40,}}>
        <Image style={{height:200,width:200}}source={require('../assets/headset.jpg')}/>
        <Text style={{fontSize:15, color:'white',fontWeight: 'bold',}}>Headsets</Text>
      </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("Laptops")}>
      <View style={{alignContent:'space-around'}}>
        <Image style={{height:200,width:200}} source={require('../assets/laptop.jpg')}/>
        <Text style={{fontSize:15, color:'white',fontWeight: 'bold',}}>Laptops</Text>
      </View>
      </TouchableOpacity>
      </View>

    <View style={{flexDirection:'row'}}>

    <TouchableOpacity onPress={()=>navigation.navigate("Speakers")}>
      <View style={{marginEnd:40,}}>
        <Image style={{height:200,width:200}}source={require('../assets/speakers.jpg')}/>
        <Text style={{fontSize:15, color:'white',fontWeight: 'bold',}}>Speakers</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Phones")}>
      <View style={{alignContent:'space-around'}}>
        <Image style={{height:200,width:200}} source={require('../assets/phones.jpg')}/>
        <Text style={{fontSize:15, color:'white',fontWeight: 'bold',}}>Phones</Text>
      </View>
      </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor:'#e8e9eb',
    marginTop:0,
    marginBottom:60,
    padding:30,
    borderRadius:30,
    width:350,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:60,
    height:"20%"
  },
});