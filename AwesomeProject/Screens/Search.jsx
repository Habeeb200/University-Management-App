import { ActivityIndicator, Image, StyleSheet, Text, View,TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, query, getDocs } from "firebase/firestore";
import { auth, db } from '../firebase';
import { AntDesign } from '@expo/vector-icons';

const Search = ({navigation}) => {
    const [allusers,setAllUsers] = useState(null)
    const[text,setText]= useState("")
    const fetchUser = async() =>{
        const querySnapshot = await getDocs(collection(db, 'Users Info'));
        const users = [];
        querySnapshot.forEach((doc) => {
        users.push(doc.data());
        });
        setAllUsers(users);
     };
     useEffect(()=>{
        fetchUser()
        },[])
  return (
   <View style={{flex:1}}>
     <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"blue",height:70,elevation:10}}>
          <View style={{flexDirection:"row",alignItems:"center",width:200,justifyContent:"space-evenly"}}>
              <TouchableOpacity>
                <AntDesign name="left" size={20} color="white" onPress={()=>navigation.goBack()}/>
              </TouchableOpacity>
                <Text style={{fontSize:21,fontWeight:"bold",color:"white"}}>Find Friends</Text>
          </View>
     </View>
    <ScrollView>
        <View style={{alignItems:"center"}}>
            <View style={{elevation:5,alignItems:"center",width:330,height:55,marginTop:20,borderRadius:20,backgroundColor:"white",flexDirection:"row",justifyContent:"space-between"}}>
                <TextInput placeholder='Search for other students' value={text} onChangeText={(text)=>setText(text)}style={{paddingLeft:20}}/>
                <AntDesign name="search1" size={24} color="black" style={{paddingRight:20}}/>
            </View>
            <View style={{ flex: 1,alignItems:"center"}}>
            {allusers ? (
                allusers.map((user, index) => {
                    if(user.name.toLowerCase().includes(text.toLowerCase())){
                        return(
                            <TouchableOpacity style={{elevation:5,width:320,backgroundColor:"white",height:100,margin:8,flexDirection:"row",padding:10,alignItems:"center",borderRadius:20}} onPress={()=>navigation.navigate("user",{user})}>
                                <Image source={{uri: user.image}} style={{width:80,height:80,borderRadius:80}}/>
                                <View style={{marginLeft:10}}>
                                    <Text key={index} style={{fontSize:20, fontWeight:"600"}}>{user.name}</Text>    
                                    <Text key={index} style={{fontSize:17, fontWeight:"600",marginTop:5}}>{user.level} Level</Text>    
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }
                )
            ) : (
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <ActivityIndicator size={50}/>
                </View>
            )}
            </View>
        </View>
    </ScrollView>
   </View>

  )
}

export default Search

const styles = StyleSheet.create({})