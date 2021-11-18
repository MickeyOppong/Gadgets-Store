import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,FlatList, View,TouchableOpacity, Image } from 'react-native';

const Headsets =  [{
  
  title: "Iphone 12promax",
  price: "$500",
  picture:"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iphone_12_pro_iphone_12_iphone_11_battery_life.jpg"
},
{
  id: "M7652_D_08X1",
  title: "Samsung GalaxyS20",
  price: "$400",
  picture:'https://images.samsung.com/africa_en/smartphones/galaxy-s20/images/galaxy-s20_banner_bloom_m.jpg'
},
{
  id: "171546C_A_107X1",
  title: "Infinix note 10",
  price: "$250",
  picture:'https://fdn2.gsmarena.com/vv/bigpic/infinix-note-10.jpg'
},
{
  id: "162054C_A_107X1",
  title: "Tecno camon 17",
  price: "$300",
  picture:'https://www.gizmochina.com/wp-content/uploads/2021/04/TECNO-CAMON-17-Frost-Silver.jpg'
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