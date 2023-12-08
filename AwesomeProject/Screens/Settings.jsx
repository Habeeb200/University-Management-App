import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { auth } from '../firebase';
import {  signOut } from "firebase/auth";
const Settings = ({navigation}) => {
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
        navigation.navigate("Login")
        }).catch((error) => {
        // An error happened.
        });
    }
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"blue",height:70,elevation:10}}>
          <View style={{flexDirection:"row",alignItems:"center",width:160,justifyContent:"space-evenly"}}>
              <TouchableOpacity>
                <AntDesign name="left" size={20} color="white" onPress={()=>navigation.goBack()}/>
              </TouchableOpacity>
                <Text style={{fontSize:21,fontWeight:"bold",color:"white"}}>Settings</Text>
          </View>
     </View>
        <Text style={{marginHorizontal:16,marginVertical:15,fontSize:17,fontWeight:"bold"}}>GENERAL</Text>
        <View style={{alignItems:"center"}}>
            <TouchableOpacity onPress={()=>navigation.navigate("top")} style={{flexDirection:"row",width:320,justifyContent:"space-between",paddingBottom:10,borderColor:"gray",opacity:0.8,marginBottom:15,backgroundColor:"#C2D9FF",padding:10,borderRadius:5}}>
                <Text style={{fontSize:16,fontWeight:"700"}}>Edit Profile</Text>
                <AntDesign name="right" size={19} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Forget")} style={{flexDirection:"row",width:320,justifyContent:"space-between",paddingBottom:10,borderColor:"gray",opacity:0.8,marginBottom:15,backgroundColor:"#C2D9FF",padding:10,borderRadius:5}}>
                <Text style={{fontSize:16,fontWeight:"700"}}>Change Password</Text>
                <AntDesign name="right" size={19} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:"row",width:320,justifyContent:"space-between",paddingBottom:10,borderColor:"gray",opacity:0.8,marginBottom:15,backgroundColor:"#C2D9FF",padding:10,borderRadius:5}}>
                <Text style={{fontSize:16,fontWeight:"700"}}>Change Language</Text>
                <AntDesign name="right" size={19} color="black" />
            </TouchableOpacity>
        </View>
        <Text style={{marginHorizontal:16,marginVertical:15,fontSize:17,fontWeight:"bold"}}>TERMS AND SUPPORT</Text>
        <View style={{alignItems:"center"}}>
            <TouchableOpacity style={{flexDirection:"row",width:320,justifyContent:"space-between",paddingBottom:10,borderColor:"gray",opacity:0.8,marginBottom:15,backgroundColor:"#C2D9FF",padding:10,borderRadius:5}}>
                <Text style={{fontSize:16,fontWeight:"700"}}>Terms and Conditions</Text>
                <AntDesign name="right" size={19} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:"row",width:320,justifyContent:"space-between",paddingBottom:10,borderColor:"gray",opacity:0.8,marginBottom:15,backgroundColor:"#C2D9FF",padding:10,borderRadius:5}}>
                <Text style={{fontSize:16,fontWeight:"700"}}>Privacy Policy</Text>
                <AntDesign name="right" size={19} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:"row",width:320,justifyContent:"space-between",paddingBottom:10,borderColor:"gray",opacity:0.8,marginBottom:15,backgroundColor:"#C2D9FF",padding:10,borderRadius:5}}>
                <Text style={{fontSize:16,fontWeight:"700"}}>Support</Text>
                <AntDesign name="right" size={19} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"blue",width:300,padding:15,borderRadius:3,marginTop:25}} onPress={handleSignOut}>  
                    <Text style={{color:"white", fontWeight:"600", fontSize:18,textAlign:"center"}}>Sign out</Text>
                </TouchableOpacity>
        </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
})