import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,FlatList, View,TouchableOpacity, Image } from 'react-native';

const Headsets =  [{
  
  title: "JVC Portable Standing Blurtooth speaker",
  price: "$950",
  picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWjrXLGOGNfF3lsIRYI2CaDumS0oiVOHxog&usqp=CAU"
},
{
  id: "M7652_D_08X1",
  title: "Creative I15 Wireless Bluetooth Speaker",
  price: "$700",
  picture:'https://d287ku8w5owj51.cloudfront.net/images/products/hero/creative-t15-wireless/hero-creative-t15-wireless.jpg'
},
{
  id: "171546C_A_107X1",
  title: "High End Bluetotth speaker",
  price: "$250",
  picture:'https://cdn.thecoolist.com/wp-content/uploads/2021/05/best-bluetooth-speaker.jpg'
},
{
  id: "162054C_A_107X1",
  title: "",
  price: "$300",
  picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5UD3epzgqC8FOU3F2nlQN9g2zf419s1AwTg&usqp=CAU'
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