import {Text, Image, View, ScrollView, SafeAreaView, Button, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';


export default function LaptopDetails({route, navigation}) {
    return (
<SafeAreaView style={{flex:1}}>
      <ScrollView style={{backgroundColor: "#fff", borderBottomEndRadius: 40, height: "80%",}}>
        <View style ={{width: "100%", margin: 10}}>
          <Image
            style={styles.image}
            source={require('../assets/laptop.jpg')}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Hp ProBook</Text>
          <Text style={styles.price}>GH$7000 </Text>
          <Text style={styles.description}>500G SSD 16G Ran</Text>
        </View>
      </ScrollView>

     <TouchableOpacity  onPress = {() => navigation.navigate("Cart")} title="Submit" style = {styles.loginBtn}  >
     <Text style ={{textAlign: "center", color: "#fff", fontSize: 20, fontWeight: "bold"}}>Add to Cart</Text>
    </TouchableOpacity>

      
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    marginTop: 20,
    height: 450,
    width: '90%',

  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
      loginBtn:{
        backgroundColor: "#FF6C00",
        marginTop: 20,
        padding: 15,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: "space-evenly"
    },

});