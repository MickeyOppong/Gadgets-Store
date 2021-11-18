import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,FlatList, View,TouchableOpacity, Image } from 'react-native';

const Headsets =  [{
  
  title: "Hp Probook",
  price: "$950",
  picture:"https://www.xda-developers.com/files/2021/04/Best-HP-laptops-1024x683.jpg"
},
{
  id: "M7652_D_08X1",
  title: "Del machine",
  price: "$700",
  picture:'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/latitude_notebooks/14_3420/global-spi/ng/notebook-latitude-14-3420-campaign-hero-504x350-ng.psd?fmt=jpg&wid=570&hei=400'
},
{
  id: "171546C_A_107X1",
  title: "Lenovo",
  price: "$650",
  picture:'https://www.lenovo.com/medias/lenovo-laptops-thinkpad-e-series-e14-gen3-amd-series.png?context=bWFzdGVyfHJvb3R8MjIxNjF8aW1hZ2UvcG5nfGgyNS9oMGEvMTE1NzI0MjY5OTc3OTAucG5nfDQyZDYyOTY3MTVjNzNmNGU2YWM4OTQwNzkwZjRmYmU2YTg0ZGU3YjNlYjJjYzJlOWI2ZTRiZDcxNzg0NzM5OTQ'
},
{
  id: "162054C_A_107X1",
  title: "Acer",
  price: "$300",
  picture:'https://static.acer.com/up/Resource/Acer/Laptops/Enduro_Urban_N3/Images/20211013/ENDURO-Urban-N3-EUN314-51W-51WG-modelpreview.png'
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