import { StyleSheet, Text, View,Button, Image, Platform,TextInput,TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
const SignUp = ({navigation}) => {
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png");
  const[eye,setEye] = useState("eye-with-line")
  const[password,setPassword]= useState("")
  const[secure,setSecure] = useState(true)
  const[email,setEmail] = useState("")
  const[name,setName] = useState("")
  const[level,setLevel] = useState("")
  const[matno,setMatNo] = useState("")
  const[year,setYear] = useState("")
  const status = "unsuccessfull"
  const registered = "false"
  const chm201 = []
  const cen301 = []
  const ams306 = []
  const ams203 = []
  const ams101 = []
  const handleClick=()=>{
    if(eye == "eye-with-line"){
      setEye("eye")
      setSecure(false)

    }else{
      setEye("eye-with-line")
      setSecure(true)
    }
  }
  const storeAttendance =async()=>{
    await setDoc(doc(db, "Attendace List", auth.currentUser.uid), {
      chm201,
      cen301,
      ams306,
      ams203,
      ams101
    });
  }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1,1],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } 
  };
  const storeToFireBase=async()=>{
    await setDoc(doc(db, "Users Info", auth.currentUser.uid), {
      name,
      email,
      image,
      level,
      matno,
      year,
      status,
      registered
    });
  }
  const handleSignUp = ()=>{
    if(level.includes(0)){
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        storeToFireBase()
        storeAttendance()
        Alert.alert("Signed up Sucesssfully")
        setName("")
        setEmail("")
        setPassword("")
        setLevel("")
        setMatNo("")
        setYear("")
        setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png")
        navigation.navigate("Login")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorMessage)
  });
    }else{
      Alert.alert("Invalid Level")
    }
  }
  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={{ width: 150, height: 150,borderRadius:100}} />}
      <Entypo name="camera" size={30} color="black" style={{marginTop:-30,marginRight:-100,backgroundColor:"white",borderRadius:30,padding:5}} onPress={()=>pickImage()}/>
      <ScrollView>
      <View style={{alignItems:"left",marginTop:6}}>
            <View style={{alignItems:"center",width:200}}>
              <Text style={{textAlign:"left",width:127,color:"blue",fontWeight:"bold"}}>Full Name</Text>
            </View>
            <View style={{flexDirection:"row",width:270,alignItems:"center",borderBottomWidth:0.5,opacity:0.7,paddingBottom:15}}>
            <Octicons name="person" size={24} color="blue" />
              <View style={{marginLeft:19}}>
                <TextInput placeholder='Ajayi Habeeb' value={name} onChangeText={(text)=>setName(text)} style={{fontSize:18,fontWeight:"600",width:280}}/>
              </View>
            </View>
        </View>
        <View style={{alignItems:"left",marginTop:10}}>
            <View style={{alignItems:"center",width:200,paddingRight:13}}>
              <Text style={{textAlign:"left",width:118,color:"blue",fontWeight:"bold"}}>Email</Text>
            </View>
            <View style={{flexDirection:"row",width:270,alignItems:"center",borderBottomWidth:0.5,opacity:0.7,paddingBottom:15}}>
            <Octicons name="person" size={24} color="blue" />
              <View style={{marginLeft:15,flexDirection:"row"}}>
                <TextInput placeholder='info@gmail.com' value={email} onChangeText={(text)=>setEmail(text)} keyboardType='email-address' style={{fontSize:18,fontWeight:"600",width:280}}/>
              </View>
            </View>
          </View>
          <View style={{alignItems:"left",marginTop:10}}>
            <View style={{alignItems:"center",width:200,paddingRight:13}}>
              <Text style={{textAlign:"left",width:140,color:"blue",fontWeight:"bold",marginLeft:20}}>Password</Text>
            </View>
            <View style={{flexDirection:"row",width:270,alignItems:"center",borderBottomWidth:0.5,opacity:0.7,paddingBottom:15}}>
            <Entypo name="key" size={24} color="blue" />
              <View style={{marginLeft:10,flexDirection:"row"}}>
                <TextInput secureTextEntry= {secure} value={password} onChangeText={(text)=>setPassword(text)} style={{fontSize:18,fontWeight:"600",width:210}}/>
                <Entypo name={eye} size={24} color="blue" onPress={handleClick}/>
              </View>
            </View>
          </View>
      <View style={{alignItems:"left",marginTop:10}}>
            <View style={{alignItems:"center",width:200,paddingLeft:3}}>
              <Text style={{textAlign:"left",width:127,color:"blue",fontWeight:"bold"}}>Level</Text>
            </View>
            <View style={{flexDirection:"row",width:270,alignItems:"center",borderBottomWidth:0.5,opacity:0.7,paddingBottom:15}}>
            <Entypo name="book" size={24} color="blue" />
              <View style={{marginLeft:13}}>
                <TextInput placeholder="100" keyboardType='numeric' value={level} onChangeText={(text)=>setLevel(text)} style={{fontSize:18,fontWeight:"600",width:220}}/>
              </View>
            </View>
        </View>
      <View style={{alignItems:"left",marginTop:10}}>
            <View style={{alignItems:"center",width:200,paddingLeft:3}}>
              <Text style={{textAlign:"left",width:127,color:"blue",fontWeight:"bold"}}>Matric Number</Text>
            </View>
            <View style={{flexDirection:"row",width:270,alignItems:"center",borderBottomWidth:0.5,opacity:0.7,paddingBottom:15}}>
            <FontAwesome name="graduation-cap" size={24} color="blue" />              
            <View style={{marginLeft:8}}>
                <TextInput placeholder="2018/7137" value={matno} onChangeText={(text)=>setMatNo(text)} keyboardType='numbers-and-punctuation' style={{fontSize:18,fontWeight:"600",width:210}}/>
              </View>
            </View>
        </View>
      <View style={{alignItems:"left",marginTop:10}}>
            <View style={{alignItems:"center",width:200}}>
              <Text style={{textAlign:"left",width:127,color:"blue",fontWeight:"bold"}}>Year of Entry</Text>
            </View>
            <View style={{flexDirection:"row",width:270,alignItems:"center",borderBottomWidth:0.5,opacity:0.7,paddingBottom:15}}>
            <AntDesign name="calendar" size={24} color="blue" />
              <View style={{marginLeft:15}}>
                <TextInput placeholder='2022/2023' value={year} onChangeText={(text)=>setYear(text)} style={{fontSize:18,fontWeight:"600",width:220}}/>
              </View>
            </View>
        </View>
        <TouchableOpacity style={{backgroundColor:"blue",width:300,padding:15,borderRadius:3,marginTop:25}} onPress={handleSignUp}>  
          <Text style={{color:"white", fontWeight:"600", fontSize:16,textAlign:"center"}}>SIGN UP</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white"
  }
})