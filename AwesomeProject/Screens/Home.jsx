import { StyleSheet, Text, View,Image, TouchableOpacity, ScrollView, Alert, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import { async } from '@firebase/util';
const Home = ({navigation}) => {
  const[userImg, setUserImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png")
  const fetchData =async()=>{
    const docRef = doc(db, "Users Info", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserImg(docSnap.data().image)
    } else {
      console.log("No such document!");
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  const predefinedEvents = [
    { name: "Convocation", day: "2023-11-21" },
    { name: "Summer Lecture", day: "2023-11-22" },
    { name: "Christmas Holiday", day: "2023-12-03" },
    { name: "Sporting Events", day: "2024-03-21" },
    { name: "Exams", day: "2024-04-1" },
    { name: "End of session", day: "2024-04-15" },
  ];

  const navigateToEvent = () => {
    navigation.navigate("event", { predefinedEvents });
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 0.16}}>
        <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"blue",height:70,elevation:10}}>
          <View style={{flexDirection:"row",alignItems:"center",width:200,justifyContent:"space-evenly"}}>
              <Entypo name="menu" size={33} color="white" onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}/>
              <View style={{flexDirection:"row",alignItems:"center"}}>
                  <Image source={require("../assets/images/bells.png")} style={{width:30, height:30}}/>
                  <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Bells Portal</Text>
              </View>
          </View>
          <View style={{flexDirection:"row",alignItems:"center",width:140,justifyContent:"flex-end"}}>
              <TouchableOpacity onPress={()=>navigation.navigate("top")}>
              <Image source={{ uri:  userImg}} style={{ width: 38, height: 38,borderRadius:50,marginRight:12}} />
              </TouchableOpacity>
              <Feather name="bell" size={24} color="white" onPress={()=>Linking.openURL("https://www.bellsuniversity.edu.ng/news/")}/>
          </View>
        </View>
        <View style={{marginTop:11}}>
          <Text style={{fontSize:12,color:"blue",textAlign:"center"}}>Registration in progress for this semester</Text>
        </View>
      </View>
      <View style={{flex:0.84,backgroundColor:"white",borderTopLeftRadius:50,borderTopRightRadius:50,}}>
          <ScrollView contentContainerStyle={{paddingTop:35,paddingLeft:30}}>
            <TouchableOpacity style={styles.service} onPress={()=>navigation.navigate("pay")}>
            <MaterialIcons name="payments" size={30} color="blue" /> 
            <Text style={{fontSize:15,marginLeft:15,fontWeight:"500"}}>Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.service} onPress={()=>navigation.navigate("history")}>
            <FontAwesome name="history" size={28} color="blue" />
            <Text style={{fontSize:15,marginLeft:15,fontWeight:"500"}}>Payment History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.service} onPress={()=>navigation.navigate("register")}>
            <Ionicons name="md-book-outline" size={26} color="blue" /> 
            <Text style={{fontSize:15,marginLeft:15,fontWeight:"500"}}>Course Registration</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.service} onPress={()=>navigation.navigate("view")}>
              <AntDesign name="eyeo" size={26} color="blue" />
              <Text style={{fontSize:15,marginLeft:15,fontWeight:"500"}}>View Course Form</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.service} onPress={()=>navigation.navigate("result")}>
              <Foundation name="results" size={26} color="blue" />
              <Text style={{fontSize:15,marginLeft:16,fontWeight:"500"}}>See Result</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.service} onPress={navigateToEvent}>
            <MaterialIcons name="event-note" size={26} color="blue" />
            <Text style={{fontSize:15,marginLeft:15,fontWeight:"500"}}>Event Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.service} onPress={()=>navigation.navigate("library")}>
            <Ionicons name="library" size={26} color="blue" />
            <Text style={{fontSize:15,marginLeft:15,fontWeight:"500"}}>Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.service} onPress={()=>navigation.navigate("transport")}>
            <MaterialIcons name="electric-rickshaw" size={26} color="blue" />
            <Text style={{fontSize:15,marginLeft:15,fontWeight:"500"}}>Transportation</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.service} onPress={()=>navigation.navigate("emergency")}>
            <MaterialCommunityIcons name="car-emergency" size={26} color="blue" />
            <Text style={{fontSize:15,marginLeft:15,fontWeight:"500"}}>Emergency</Text>
            </TouchableOpacity>
          </ScrollView>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#C2D9FF"
    },
    service:{
      flexDirection:"row",
      alignItems:"center",
      borderBottomWidth:0.3,
      width:320,
      paddingBottom:15,
      opacity:0.8,
      marginVertical:10,
      borderColor:"gray"
    }
})