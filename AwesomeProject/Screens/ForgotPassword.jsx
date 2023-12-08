import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { Octicons } from '@expo/vector-icons';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebase';
const ForgotPassword = () => {
  const [email,setEmail] = useState("")
  const handleClick=()=>{
    sendPasswordResetEmail(auth, email)
  .then(() => {
    Alert.alert("A password reset email has been sent to you")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert(errorMessage)
  });
  }
  return (
    <View style={styles.container}>
        <Image source={require("../assets/images/bells.png")} style={{width:160, height:160,marginTop:40}}/>
        <View style={{alignItems:"left",marginTop:40}}>
            <View style={{alignItems:"center",width:200}}>
              <Text style={{textAlign:"left",width:127,color:"blue",fontWeight:"bold"}}>Email</Text>
            </View>
            <View style={{flexDirection:"row",width:290,alignItems:"center",borderBottomWidth:0.5,opacity:0.7,paddingBottom:15}}>
            <Octicons name="person" size={24} color="blue" />
              <View style={{marginLeft:19}}>
                <TextInput placeholder='info@gmail.com' value={email} onChangeText={(text)=>setEmail(text)}  keyboardType='email-address' style={{fontSize:18,fontWeight:"600",width:260}}/>
              </View>
            </View>
          </View>
          <TouchableOpacity style={{backgroundColor:"blue",width:300,padding:15,borderRadius:3,marginTop:50}} onPress={handleClick}>  
          <Text style={{color:"white", fontWeight:"600", fontSize:16,textAlign:"center"}}>SUBMIT </Text>
        </TouchableOpacity>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        alignItems:"center"
    }
})