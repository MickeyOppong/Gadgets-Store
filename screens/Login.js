import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,  TextInput,Button,TouchableOpacity, ImageBackground, Image } from 'react-native';


export default function Login({navigation}) {
  return (
   
    <ImageBackground
      blurRadius={5}
      style={styles.container}
      justifyContent={'space-evenly'}
      source={require('../assets/background.jpg')}>
    
      
  <View style= {{alignContent:"center"}}>
        <Text style={{
          fontSize: 30,
          color: 'white',
          fontWeight: 'bold',
          paddingBottom: 20
          }}>Welcome to Gadgets Store!
        </Text>
      </View>

    
          <View style= {{marginTop:50}}>
      <View style= {styles.input}>
        <TextInput 
          style={styles.textstyle}
          placeholder= "username or email"
        />
      </View>

      <View style={{paddingTop: 0}}>
      </View>
      <View style= {styles.input}>
        <TextInput 
        style={styles.textstyle}
        placeholder = 'password'
        secureTextEntry= {true}/>
      </View>
      </View>
      <View style = {{paddingTop: 50,
         width: 370,
         marginTop:80,
         elevation: 5000}}>
      </View>
         <View style={{padding:0,
                      width:150,}}>
          <Button     
            onPress={() => navigation.navigate('Home')}
            title = "SIGN IN"
            color = "#03fcdf"
            />
      </View>
      <TouchableOpacity>
        <View style={{paddingTop:20}}>
          <Text style={{color:'white',fontSize:20}}> SIGN UP! </Text>
        </View>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#e8e9eb',
    borderRadius: 20,
    padding:25,
    marginTop: 50,
    width: 370
  },
  textstyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '200'
    
  }

});