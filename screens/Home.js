import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Image,TouchableOpacity,ScrollView ,Text, View, ImageBackground } from 'react-native';




export default function Home({navigation}) {
  return (
     <ImageBackground
      blurRadius={5}
      style={styles.container}
      justifyContent={'space-evenly'}
      source={require('../assets/background.jpg')}>

      
      <View style={{paddingBottom: 10}}>
        <Text style={{fontSize:30, padding:20}}>Welcome to Gadgets Store!</Text>
      </View>
        <View style ={{backgroundColor:'#a66874',padding:8,borderRadius:30}}>
        <Text style={{fontSize:25, color:'white',fontWeight: 'bold',}}>Choose Your Product</Text>
        </View>
      
    <View style={{flexDirection:'row',marginBottom:20, paddingTop:20}}>
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
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14faf6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});