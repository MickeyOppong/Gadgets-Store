import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Image,TouchableOpacity,ScrollView ,Text, View, ImageBackground,TextInput} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import{Feather} from '@expo/vector-icons';



export default function Home({navigation}) {
  return (
    <View style ={{flex:1, justifyContent: "space-evenly", flexWrap: "wrap"}}>
     <ImageBackground
      blurRadius={5}
      style={{ alignItems: "center", height: "100%",  width: "100%"}}
      width= "100%"
      height="100%"
      source={require('../assets/background.jpg')}>
       <View style={{marginTop: 50, marginHorizontal: 20}}>
        <Text style={{fontSize:30, color:'violet',}}>Welcome to Gadgets Store!</Text>
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


    <View style={{}}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      decelerationRate="fast"
      pagingEnabled
       horizontal ={true}
      >
        
    <View style={{flexDirection:'row', margin: 20}}>
        <TouchableOpacity onPress={()=>navigation.navigate("HeadSetDetails")} style={styles.products} >
            <View style={{marginEnd:40,}}>
              <Image style={{height:150,width:150}}source={require('../assets/headset.jpg')}/>
              <Text style={{fontSize:15, color:'white',fontWeight: 'bold',}}>Headsets</Text>
            </View>
            
              
            <View style= {styles.productView}>
                  
                  <View >
                  <TouchableOpacity onPress={()=>navigation.navigate("Headsets")} style ={styles.category}>
                      <Text>More</Text>
                  </TouchableOpacity>
                  </View>
              </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("LaptopDetails")} style={styles.products} >
            <View style={{marginEnd:40,}}>
              <Image style={{height:150,width:150}}source={require('../assets/laptop.jpg')}/>
              <Text style={{fontSize:15, color:'white',fontWeight: 'bold',}}>Laptops</Text>
            </View>
            
              
            <View style= {styles.productView}>
                  
                  <View >
                  <TouchableOpacity onPress={()=>navigation.navigate("Laptops")} style ={styles.category}>
                      <Text>More</Text>
                  </TouchableOpacity>
                  </View>
              </View>
        </TouchableOpacity>

      </View>

    </ScrollView>

    </View>
    

    <View style={{}}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      decelerationRate="fast"
      pagingEnabled
       horizontal ={true}
      >
        
    <View style={{flexDirection:'row', margin: 20}}>
        <TouchableOpacity onPress={()=>navigation.navigate("SpeakerDetails")} style={styles.products} >
            <View style={{marginEnd:40,}}>
              <Image style={{height:150,width:150}}source={require('../assets/speakers.jpg')}/>
              <Text style={{fontSize:15, color:'white',fontWeight: 'bold',}}>Speakers</Text>
            </View>
            
              
            <View style= {styles.productView}>
                  
                  <View >
                  <TouchableOpacity onPress={()=>navigation.navigate("Speakers")} style ={styles.category}>
                      <Text>More</Text>
                  </TouchableOpacity>
                  </View>
              </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("PhoneDetails")} style={styles.products} >
            <View style={{marginEnd:40,}}>
              <Image style={{height:150,width:150}}source={require('../assets/phones.jpg')}/>
              <Text style={{fontSize:15, color:'white',fontWeight: 'bold',}}>Phones</Text>
            </View>
            
              
            <View style= {styles.productView}>
                  
                  <View >
                  <TouchableOpacity onPress={()=>navigation.navigate("Phones")} style ={styles.category}>
                      <Text>More</Text>
                  </TouchableOpacity>
                  </View>
              </View>
        </TouchableOpacity>

      </View>

    </ScrollView>

    

    </View>

    
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor:'#e8e9eb',
    borderRadius:30,
    padding: 10,
    justifyContent: "flex-start",
    width:"80%",
    alignItems: 'center',
    marginBottom:30,
    marginTop: 30,
    height:50,
  },
  productView: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    
  },
  category:{
    width: 90,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: "#FF6500",

},
products:{
  borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: "center",
    padding: 10
    
}
});