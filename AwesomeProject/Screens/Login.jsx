import { Image, StyleSheet, Text, TextInput, View,TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
const Login = ({navigation}) => {
  const[eye,setEye] = useState("eye-with-line")
  const[password,setPassword]= useState("")
  const[email,setEmail]= useState("")
  const[secure,setSecure] = useState(true)
  const handleClick=()=>{
    if(eye == "eye-with-line"){
      setEye("eye")
      setSecure(false)

    }else{
      setEye("eye-with-line")
      setSecure(true)
    }
  }
  const handleLogin = ()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    Alert.alert("Login Successfull")
    setEmail("")
    setPassword("")
    setEye("eye-with-line")
    navigation.navigate("Homer")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert(errorMessage)
  });
  }
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image source={require("../assets/images/bells.png")} style={{width:160, height:160}}/>
        <Text style={{textAlign:"center",color:"white",fontWeight:"bold",fontSize:22,marginTop:20}}>Login to your Portal</Text>
      </View>
      <View style={styles.container2}>
          <ScrollView>
          <View style={{alignItems:"left",marginTop:50}}>
            <View style={{alignItems:"center",width:200}}>
              <Text style={{textAlign:"left",width:127,color:"blue",fontWeight:"bold",fontSize:17}}>Email</Text>
            </View>
            <View style={{flexDirection:"row",width:270,alignItems:"center",borderBottomWidth:0.5,opacity:0.7,paddingBottom:15}}>
            <Octicons name="person" size={24} color="blue" />
              <View style={{marginLeft:19}}>
                <TextInput placeholder='info@gmail.com' value={email} onChangeText={(text)=>setEmail(text)} style={{fontSize:18,fontWeight:"600",width:220}}/>
              </View>
            </View>
          </View>
          <View style={{alignItems:"left",marginTop:30}}>
            <View style={{alignItems:"center",width:200}}>
              <Text style={{textAlign:"left",width:118,color:"blue",fontWeight:"bold",fontSize:17}}>Password</Text>
            </View>
            <View style={{flexDirection:"row",width:270,alignItems:"center",borderBottomWidth:0.5,opacity:0.7,paddingBottom:15}}>
            <Entypo name="key" size={24} color="blue" />
              <View style={{marginLeft:19,flexDirection:"row"}}>
                <TextInput secureTextEntry= {secure} value={password} onChangeText={(text)=>setPassword(text)} style={{fontSize:18,fontWeight:"600",width:200}}/>
                <Entypo name={eye} size={24} color="blue" onPress={handleClick}/>
              </View>
            </View>
          </View>
          <TouchableOpacity style={{backgroundColor:"blue",width:300,padding:15,borderRadius:3,marginTop:50}} onPress={handleLogin}>  
          <Text style={{color:"white", fontWeight:"600", fontSize:16,textAlign:"center"}}>LOGIN </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf:"flex-end",marginRight:30,marginTop:20}} onPress={()=>navigation.navigate("Forget")}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
        <Text style={{fontSize:11,marginTop:25}}>By logging in you agree to the <Text style={{color:"blue"}}>Terms and Conditions</Text></Text>
          </ScrollView>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#2B3499"
    },
    container1:{
        flex:0.35,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#2B3499"
    },
    container2:{
        flex:0.65,
        backgroundColor:"white",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        alignItems:"center",
        justifyContent:"center"
    }
})