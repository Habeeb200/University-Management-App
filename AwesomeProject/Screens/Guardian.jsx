import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { auth, db } from '../firebase'
import { doc, setDoc } from "firebase/firestore";
const Guardian = () => {
    const[guardianname,setName] = useState("")
    const[guardianphone,setPhone] = useState("")
    const[guardianaddress,setAddress] = useState("")
    const storeToFireBase=async()=>{
        await setDoc(doc(db, "Guardian Details", auth.currentUser.uid), {
          guardianname,
          guardianphone,
          guardianaddress
        });
      }
  return (
    <View style={{backgroundColor:"white",flex:1}}>
        <ScrollView contentContainerStyle={{paddingTop:10,paddingLeft:20}}>
            <View style={styles.service}>
                <Text style={{fontSize:15,marginLeft:15,fontWeight:"500",opacity:0.6}}>Guardian Name</Text>
                <TextInput value={guardianname} onChangeText={(text)=>setName(text)} style={{fontSize:15,marginLeft:15,fontWeight:"500"}}></TextInput>
            </View>
             <View style={styles.service}>
                <Text style={{fontSize:15,marginLeft:15,fontWeight:"500",opacity:0.6}}>Guardian Phone</Text>
                <TextInput value={guardianphone} onChangeText={(text)=>setPhone(text)} keyboardType='numeric' style={{fontSize:15,marginLeft:25,fontWeight:"500"}}></TextInput>
            </View>
            <View style={styles.service}>
                <Text style={{fontSize:15,marginLeft:15,fontWeight:"500",opacity:0.6}}>Guardian Address</Text>
                <TextInput  value={guardianaddress} onChangeText={(text)=>setAddress(text)}style={{fontSize:15,marginLeft:15,fontWeight:"500",width:130}} multiline></TextInput>
            </View>
            <TouchableOpacity style={{backgroundColor:"blue",width:320,padding:15,borderRadius:3,marginTop:5,marginBottom:5}} onPress={storeToFireBase}>  
                <Text style={{color:"white", fontWeight:"600", fontSize:16,textAlign:"center"}}>SAVE</Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default Guardian

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