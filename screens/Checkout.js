import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,  TextInput,Button,TouchableOpacity, ImageBackground, Image } from 'react-native';


export default function Login({navigation}) {
  return (
   
    <ImageBackground
      blurRadius={5}
      style={styles.container}
      justifyContent={'space-evenly'}
      source={require('../assets/checkout background.jpg')}>
    
      
  <View style= {{alignContent:"center"}}>
        <Text style={{
          fontSize: 30,
          textAlign: "center",
          color: 'Black',
          fontWeight: 'bold',
          paddingBottom: 10
          }}>Payment Details
        </Text>
      </View>

          
      
           
          <View style= {{marginTop:80}}>
      <View style= {styles.input}>
        <TextInput 
          style={styles.textstyle}
          placeholder= "Fullname"
        />
      </View>

      <View style={{paddingBottom: 0}}>
      </View>
      <View style= {styles.input}>
        <TextInput 
        style={styles.textstyle}
        placeholder = 'Email'
        secureTextEntry= {true}/>
      </View>
      </View>

      <View style= {{marginTop:60}}>
      <View style= {styles.input}>
        <TextInput 
          style={styles.textstyle}
          placeholder= "Address"
        />
      </View>

      <View style={{paddingBottom: 0}}>
      </View>
      <View style= {styles.input}>
        <TextInput 
        style={styles.textstyle}
        placeholder = 'Card Number'
        secureTextEntry= {true}/>
      </View>
      </View>

      <View style = {{paddingTop: 50,
         width: 370,
         marginTop:80,
         elevation: 5000}}>
      </View>
         <View style={{padding:0, marginBottom:0,
                      width:150,}}>
          <Button     
            onPress={() => navigation.navigate('Home')}
            title = "Done"
            color = "#03fcdf"
            />
      </View>
      <View>
      <Text>Payments are secured and encrypted</Text>
      </View>


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