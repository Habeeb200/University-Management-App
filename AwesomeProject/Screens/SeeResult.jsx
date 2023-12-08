import { StyleSheet, Text, View,TouchableOpacity, ActivityIndicator } from 'react-native'
import React,{ useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { doc, getDoc } from "firebase/firestore";
import { AntDesign } from '@expo/vector-icons';

const SeeResult = () => {
    const[allCourses,seAllCourses] = useState(null)
    const [grade,setGrade] = useState("")
    const[ams101,setams101] = useState("")
    const[ams203,setams203] = useState("")
    const[ams306,setams306] = useState("")
    const[cen301,setcen301] = useState("")
    const[chm301,setchm301] = useState("")
    const fetchData = async()=>{
        const docRef = doc(db, "Users Info", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            seAllCourses(docSnap.data().allCourse)
        } else {
        console.log("No such document!");
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    // let scores = []
    //     for(i=0;i<5;i++){
    //         const score = Math.floor(Math.random()*100)
    //         scores.push(score)
    //     }
    // useEffect(()=>{
    //     if(score>= 70 && score <= 100){
    //         setGrade("A")
    //     }else if(score >= 60 && score<= 69){
    //         setGrade("B")
    //     }else if( score >= 50 && score <=59){
    //         setGrade("C")
    //     }else if(score >= 40 && score <= 49){
    //         setGrade("D")
    //     }else if(score <= 39){
    //         setGrade("F")
    //     }
    // },[])
  return (
    <View style={{backgroundColor:"white",flex:1}}>
      <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"blue",height:70,elevation:10}}>
            <View style={{flexDirection:"row",alignItems:"center",width:200,justifyContent:"space-evenly"}}>
                <TouchableOpacity>
                    <AntDesign name="left" size={20} color="white" onPress={()=>navigation.goBack()}/>
                </TouchableOpacity>
                    <Text style={{fontSize:21,fontWeight:"bold",color:"white"}}>All Courses</Text>
            </View>
         </View>
       <View style={{alignItems:"center"}}>
       <View style={{flexDirection:"row",justifyContent:"space-around", width:350,marginTop:20,borderBottomWidth:1,borderTopWidth:1,paddingTop:15,paddingBottom:15}}>
            <Text style={{fontWeight:"600", fontSize:20, color: "black",marginLeft:14 }}>Course</Text>
            <Text style={{fontWeight:"600", fontSize:20, color: "black",marginRight:20,marginLeft:50 }}>Score</Text>
            <Text style={{fontWeight:"600", fontSize:20, color: "black" }}>Grade</Text>
         </View>
         {allCourses ? allCourses.map((course) => {
            const scores = [];
            for (let i = 0; i < 5; i++) {
                const score = Math.floor(Math.random() * 100);
                scores.push(score);
            }
            return scores.map((score, index) => (
                <View key={index} style={{ width: 335, padding: 20, borderRadius: 10, marginTop: 20, justifyContent: "space-between", flexDirection: "row" }}>
                    <Text style={{ fontWeight: "600", fontSize: 18, color: "black" }}>{course}</Text>
                    <Text style={{ fontWeight: "600", fontSize: 18, color: "black" }}>{score}/100</Text>
                    <Text style={{fontWeight:"600", fontSize:18, color: "black" }}>{score >= 70 ? "A" : (score >= 60 ? "B" : (score >= 50 ? "C" : (score >= 40 ? "D" : "F")))}</Text>
                </View>
            ));
}) : <ActivityIndicator size={80} style={{ marginTop: 280 }} />}
        </View>
    </View>
  )
}

export default SeeResult

const styles = StyleSheet.create({})