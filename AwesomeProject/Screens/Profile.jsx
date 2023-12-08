import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { doc, getDoc } from "firebase/firestore";
import { Entypo } from '@expo/vector-icons';
import {  setDoc } from "firebase/firestore";
import * as ImagePicker from 'expo-image-picker'
const Profile = ({navigation}) => {
    const[name,setName] = useState("")
    const[level,setLevel] = useState("")
    const[matno,setMatNo] = useState("")
    const[years,setYears] = useState("")
    const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png");
    const[program,setProgram] = useState("")
    const [dept,setDept] = useState("")
    const status = "unsuccessfull"
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
  const fetchData =async()=>{
    const docRef = doc(db, "Users Info", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setName(docSnap.data().name)
      setMatNo(docSnap.data().matno)
      setYears(docSnap.data().year)
      setImage(docSnap.data().image)
      setProgram(docSnap.data().program)
      setDept(docSnap.data().dept)
    } else {
      console.log("No such document!");
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
    let currentDate =new Date()
    const year = currentDate.getFullYear();
    const storeToFireBase=async()=>{
        await setDoc(doc(db, "Users Info", auth.currentUser.uid), {
          name,
          image,
          level,
          matno,
          years,
          status
        });
        Alert.alert("Profile Updated Sucessfully")
      }
      const storeNew=()=>{
        const cityRef = doc(db, 'Users Info', auth.currentUser.uid);
        setDoc(cityRef, { dept,program }, { merge: true });
      }
      const handleUpdateProfile = ()=>{
        storeToFireBase()
        storeNew()
      }
    // const month = currentDate.getMonth(); // Note: Months are zero-based (0 = January, 11 = December)
    // const day = currentDate.getDate();
    // const hours = currentDate.getHours();
    // const minutes = currentDate.getMinutes();
    // const seconds = currentDate.getSeconds();
  return (
    <View style={{backgroundColor:"white",flex:1}}>
            <View style={{alignItems:"center",marginVertical:10}}>
                {image && <Image source={{ uri: image }} style={{ width: 150, height: 150,borderRadius:100}} />}
                <Entypo name="camera" size={30} color="black" style={{marginTop:-30,marginRight:-100,backgroundColor:"white",borderRadius:30,padding:5}} onPress={()=>pickImage()}/>
            </View>
        <ScrollView contentContainerStyle={{paddingTop:10,paddingLeft:20}}>
            <View style={styles.service}>
                <Text style={{fontSize:15,marginLeft:15,fontWeight:"500",opacity:0.6}}>FULL Name</Text>
                <TextInput value={name} onChangeText={(text)=>setName(text)}  style={{fontSize:15,marginLeft:15,fontWeight:"500"}}></TextInput>
            </View>
             <View style={styles.service}>
                <Text style={{fontSize:15,marginLeft:15,fontWeight:"500",opacity:0.6}}>Matric No</Text>
                <TextInput value={matno} onChangeText={(text)=>setMatNo(text)} keyboardType='numbers-and-punctuation' style={{fontSize:15,marginLeft:25,fontWeight:"500"}}></TextInput>
            </View>
            <View style={styles.service}>
                <Text style={{fontSize:15,marginLeft:15,fontWeight:"500",opacity:0.6}}>Program</Text>
                <TextInput value={program} onChangeText={(text)=>setProgram(text)} style={{fontSize:15,marginLeft:32,fontWeight:"500"}}></TextInput>
            </View>
            <View style={styles.service}>
                <Text style={{fontSize:15,marginLeft:15,fontWeight:"500",opacity:0.6}}>Session</Text>
                <TextInput style={{fontSize:15,marginLeft:33,fontWeight:"500"}} value={`${year}/${year+1}`}></TextInput>
            </View>
            <View style={styles.service}>
                <Text style={{fontSize:15,marginLeft:15,fontWeight:"500",opacity:0.6}}>Department</Text>
                <TextInput value={dept} onChangeText={(text)=>setDept(text)} style={{fontSize:15,marginLeft:15,fontWeight:"500"}}></TextInput>
            </View>
            <View style={styles.service}>
                <Text style={{fontSize:15,marginLeft:15,fontWeight:"500",opacity:0.6}}>Entry Year</Text>
                <TextInput value={years} onChangeText={(text)=>setYears(text)} style={{fontSize:15,marginLeft:15,fontWeight:"500"}}></TextInput>
            </View>
            <TouchableOpacity style={{backgroundColor:"blue",width:320,padding:15,borderRadius:3,marginTop:5,marginBottom:5}} onPress={handleUpdateProfile}>  
                <Text style={{color:"white", fontWeight:"600", fontSize:16,textAlign:"center"}}>SAVE</Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
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