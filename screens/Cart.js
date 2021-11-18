import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView,Button } from 'react-native';


import { BottomNav } from './Home';
import {TopView} from './Home';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const HomeBtn= (props)=>{
    return(
        <TouchableOpacity onPress= {()=>props.nav.navigate('Home')}>

        <View>
            <AntDesign name="home" size={35} color="black" />
        </View>
        </TouchableOpacity>
    )
}


const ShoppingCart = ({navigation, name,amount, imagePath, num, id}) =>{
    
    return (
        <View style={{backgroundColor: "#F8F9FA", flex: 1}}>

            <View style= {{flex: 1}}>
                
                        <View >
                            <View style= {styles.cartView} key = {id}>
                                <View style={styles.productPic}>
                                    <Image source ={require('../assets/headset.jpg')}  resizeMode="cover" style={{width: '100%', height: '100%',}}/>
                                </View>

                                <View style={styles.productDis}>
                                    <Text>
                                        Gaming Headset
                                    </Text>
                                    <Text style={{fontWeight: 'bold'}}>
                                        GH$300
                                    </Text>
                                </View>

                                <View style={styles.numOf}>
                                    <View style= {{flexDirection: "row", alignItems: "center", width: "100%"}} >
                                            <FontAwesome5 name="minus" size={20} color="#FF6C00"/>
                                        <Text style={{fontSize: 25, paddingHorizontal: 10}}>
                                            1
                                        </Text>
                                        <FontAwesome name="plus" size={20} color="#FF6C00" />
                                        {/* <Button tltle = "+"/> */}
                                    </View>
                                </View>  
                                
                            </View>
                        </View>
                </View>
                <View style ={{margin: 10, flexDirection: 'row,', justifyContent: "space-between"}}>
                    <View>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}>Total</Text>
                    </View>
                    <View>
                       GH$300
                    </View>
                    
                </View>
                <View style={{alignItems: "center", margin: 10}}>

                <View style={{padding:0, marginBottom:0,
                      width:150,}}>
          <Button     
            onPress={()=>navigation.navigate("Checkout")}
            title = "Done"
            color = "#fc3003"
            />
      </View>

                <HomeBtn nav = {navigation}/>
                </View>
            </View>
                    )
                    
}




const styles = StyleSheet.create({
  cartView:{
      flex: 1,
      marginTop: 5,
      flexDirection: "row",
      justifyContent: "space-around",
      flexWrap: "wrap",
      backgroundColor:"#fff" ,
      margin: 10,
      borderRadius:10

  },
  productPic:{
      width: "30%",
      height: 120,
      borderRadius: 10,
      padding: 20,
      backgroundColor: "#fff"
  },
  productDis:{
      justifyContent: 'center',
      width: "30%"
  },
  numOf:{
      flexDirection: "row",
      height:60,
      width: "30%",
      justifyContent: "center",
      alignItems:"center",
      marginTop: 30
  },
  header:{
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 30,
      margin: 10
  },
  loginBtn:{
      backgroundColor: "#FF6C00",
      marginTop: 10,
      padding: 15,
      marginRight: 10,
      marginLeft: 10,
      marginBottom: 20,
      borderRadius: 10,



  },
})

export default ShoppingCart;