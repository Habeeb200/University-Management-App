import { StyleSheet, Text, View,TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { doc, getDoc } from "firebase/firestore";
import { AntDesign } from '@expo/vector-icons';
const ViewCourses = ({navigation}) =>{
    const[allCourses,seAllCourses] = useState(null)
    const fetchData = async()=>{
        const docRef = doc(db, "Users Info", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            seAllCourses(docSnap.data().allCourse)
        } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <View>
        <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"blue",height:70,elevation:10}}>
            <View style={{flexDirection:"row",alignItems:"center",width:200,justifyContent:"space-evenly"}}>
                <TouchableOpacity>
                    <AntDesign name="left" size={20} color="white" onPress={()=>navigation.goBack()}/>
                </TouchableOpacity>
                    <Text style={{fontSize:21,fontWeight:"bold",color:"white"}}>All Courses</Text>
            </View>
         </View>
       <View style={{alignItems:"center"}}>
        {allCourses? allCourses.map((course)=>(
                 <TouchableOpacity style={{backgroundColor:"white",width:300,padding:20,borderRadius:10,marginTop:20}}>  
                    <Text style={{fontWeight:"600", fontSize:18, color: "black" }}>{course}</Text>
                </TouchableOpacity>
            )): <ActivityIndicator size={80} style={{marginTop:280}}/>}
            {/* {}   */}
        <TouchableOpacity style={{backgroundColor:"blue",width:300,padding:15,borderRadius:3,marginTop:25}} >  
            <Text style={{color:"white", fontWeight:"600", fontSize:18,textAlign:"center"}}>PRINT</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default ViewCourses

const styles = StyleSheet.create({})