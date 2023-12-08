import { StyleSheet, Text, View,TouchableOpacity, Dimensions, ScrollView, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Checkbox } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { auth, db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
<AntDesign name="frown" size={24} color="black" />
const {width,height} = Dimensions.get("window")
const RegistrationForm = ({navigation}) => {
    const[bgColor,setbgColor] = useState("white")
    const[textColor,setTextColor] = useState("black")
    const[bgColor1,setbgColor1] = useState("white")
    const[textColor1,setTextColor1] = useState("black")
    const[bgColor2,setbgColor2] = useState("white")
    const[textColor2,setTextColor2] = useState("black")
    const[bgColor3,setbgColor3] = useState("white")
    const[textColor3,setTextColor3] = useState("black")
    const[bgColor4,setbgColor4] = useState("white")
    const[textColor4,setTextColor4] = useState("black")
    const[registerStatus, setRegisterStatus] = useState("")
    const [allCourse, setCourses] = useState([]);
    const[status,setStatus] = useState("")
    const CHM201 = Math.floor(Math.random()*100)
    const CEN301 = Math.floor(Math.random()*100)
    const AMS306 = Math.floor(Math.random()*100)
    const AMS203 = Math.floor(Math.random()*100)
    const AMS101 = Math.floor(Math.random()*100)
    const fetchData = async()=>{
        const docRef = doc(db, "Users Info", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setStatus(docSnap.data().status);
        } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        }
    }
    const updateRegisterStatus=async()=>{
        const washingtonRef = doc(db, "Users Info", auth.currentUser.uid);
            await updateDoc(washingtonRef, {
            registered: "true"
            });
    }
    const setCourse = async()=>{
        updateRegisterStatus()
        const cityRef = doc(db, 'Users Info', auth.currentUser.uid);
        setDoc(cityRef, { allCourse,CHM201,CEN301,AMS101,AMS203,AMS306 }, { merge: true });
        Alert.alert("Courses registered sucessfully")
        navigation.navigate("view")
    }
    const fetchStatusRegister=async()=>{
        const docRef = doc(db, "Users Info", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setRegisterStatus(docSnap.data().registered)
        } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        }
    }
    useEffect(()=>{
        fetchData()
        fetchStatusRegister()
    },[])
    const handleClick = (text)=>{
        setCourses((prevCourses) => [...prevCourses, text]);
       bgColor == "white"? setbgColor("blue"):setbgColor("white")
       textColor == "black"?setTextColor("white"):setTextColor("black")
    }
    const handleClick1 = (text)=>{
        setCourses((prevCourses) => [...prevCourses, text]);
       bgColor1 == "white"? setbgColor1("blue"):setbgColor1("white")
       textColor1 == "black"?setTextColor1("white"):setTextColor1("black")
    }
    const handleClick2 = (text)=>{
        setCourses((prevCourses) => [...prevCourses, text]);
       bgColor2 == "white"? setbgColor2("blue"):setbgColor2("white")
       textColor2 == "black"?setTextColor2("white"):setTextColor2("black")
    }
    const handleClick3 = (text)=>{
        setCourses((prevCourses) => [...prevCourses, text]);
       bgColor3 == "white"? setbgColor3("blue"):setbgColor3("white")
       textColor3 == "black"?setTextColor3("white"):setTextColor3("black")
    }
    const handleClick4 = (text)=>{
        setCourses((prevCourses) => [...prevCourses, text]);
       bgColor4 == "white"? setbgColor4("blue"):setbgColor4("white")
       textColor4 == "black"?setTextColor4("white"):setTextColor4("black")
    }
  return (
    <View style={{flex:1}}>
        <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"blue",height:70,elevation:10}}>
            <View style={{flexDirection:"row",alignItems:"center",width:250,justifyContent:"space-evenly"}}>
                <TouchableOpacity>
                    <AntDesign name="left" size={20} color="white" onPress={()=>navigation.goBack()}/>
                </TouchableOpacity>
                    <Text style={{fontSize:21,fontWeight:"bold",color:"white"}}>Register Courses</Text>
            </View>
         </View>
         {registerStatus == ""?(<ActivityIndicator/>):(registerStatus=="false"?(
            status == ""?<ActivityIndicator size={70} style={{marginTop:290}}/>:(status == "successfull"?(
                <ScrollView>
                <View style={{alignItems:"center"}}>
                    <TouchableOpacity style={{backgroundColor:bgColor,width:300,padding:20,borderRadius:10,marginTop:20}} onPress={()=>handleClick("AMS 101")}>  
                        <Text style={{fontWeight:"600", fontSize:18, color: textColor }}>AMS 101</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:bgColor1,width:300,padding:20,borderRadius:10,marginTop:20}} onPress={()=>handleClick1("AMS 203")}>  
                        <Text style={{fontWeight:"600", fontSize:18, color: textColor1 }}>AMS 203</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:bgColor2,width:300,padding:20,borderRadius:10,marginTop:20}} onPress={()=>handleClick2("AMS 306")}>  
                        <Text style={{fontWeight:"600", fontSize:18, color: textColor2 }}>AMS 306</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:bgColor3,width:300,padding:20,borderRadius:10,marginTop:20}} onPress={()=>handleClick3("CEN 301")}>  
                        <Text style={{fontWeight:"600", fontSize:18, color: textColor3 }}>CEN 301</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:bgColor4,width:300,padding:20,borderRadius:10,marginTop:20}} onPress={()=>handleClick4("CHM 201")}>  
                        <Text style={{fontWeight:"600", fontSize:18, color: textColor4 }}>CHM 201</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"blue",width:320,padding:15,borderRadius:3,marginTop:25}} onPress={setCourse}>  
                        <Text style={{color:"white", fontWeight:"600", fontSize:16,textAlign:"center"}}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
             </ScrollView>
             ):
             (<View style={{justifyContent:"center",alignItems:"center",marginVertical:200}}>
                <FontAwesome5 name="sad-cry" size={100} color="red" />
                <Text style={{fontSize:20,fontWeight:"600",marginTop:10}}>You have to Pay your tuition fees</Text>
             </View>))
         ):(<View style={{margin:10, }}>
            <Text style={{fontSize:17}}>You've successfully enrolled in your courses; now, proceed to the "View Courses" section to generate and print your course form.</Text>
         </View>))}
         {/* {} */}
      
    </View>
  )
}

export default RegistrationForm

const styles = StyleSheet.create({
   
})