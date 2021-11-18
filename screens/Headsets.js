import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,FlatList, View,TouchableOpacity, Image } from 'react-native';

const Headsets =  [{
  
  title: "Gaming Headset",
  price: "$110",
  color: "Blue and balck",
  picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5-dSBLA3oUfbu2AUxOXsj2K6ziZKIpUWzQXHHFBVtky-2CItjz0bN8-JD_NNX-cTAtw&usqp=CAU"
},
{
  id: "M7652_D_08X1",
  title: "Pro wireless headset high voice",
  price: "$55",
  picture:'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/proflight_hdst_2/product-silo-images/48593_ProFlight_Series2_1200x1022_02.psd/jcr:content/renditions/cq5dam.web.600.600.png'
},
{
  id: "171546C_A_107X1",
  title: "Wireless USB Computer and office headset",
  price: "$120",
  picture:'https://cdn.shopify.com/s/files/1/0553/3171/7282/products/leitner-wireless-over-the-head-headset_472x.jpg?v=1630343597'
},
{
  id: "162054C_A_107X1",
  title: "CHUCK 70",
  price: "$85",
  picture:'https://www.ceekvr.com/api/image/5e7a9950bf9f4_GUxVM7Cg.jpeg'
},

];

const renderItem = ({ item }) => (
  <View style={styles.nikeshoes}>
    <TouchableOpacity>
      <View style={styles.converseshoes}>
    <Image resizeMode='contain' style={{height:300,width:400}} source={{uri:item.picture}}/>
    <Text style={styles.itemstyle}>{item.title}</Text>
    <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default function Converseshop() {
  return (
    <View style={styles.container}>
      <FlatList
        data={Headsets}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Headsets: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemstyle: {
    fontSize:18
  },
});