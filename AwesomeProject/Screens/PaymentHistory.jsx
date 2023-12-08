import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { doc, getDoc } from "firebase/firestore";
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';
const PaymentHistory = ({navigation}) => {
    const today = new Date()
    const [name,setName] = useState("")
    const [level,setLevel] = useState("")
    const [status,setStatus]= useState("")
    const [total,setTotal] = useState("")
    const [matno,setMatNo] = useState("")
    const fetchData = async()=>{
        const docRef = doc(db, "Users Info", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setName(docSnap.data().name)
            setLevel(docSnap.data().level)
            setStatus(docSnap.data().status)
            setTotal(docSnap.data().total)
            setMatNo(docSnap.data().matno)
        } else {
        console.log("No such document!");
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
        <View>
            <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"blue",height:70,elevation:10}}>
                <View style={{flexDirection:"row",alignItems:"center",width:240,justifyContent:"space-evenly"}}>
                    <TouchableOpacity>
                        <AntDesign name="left" size={20} color="white" onPress={()=>navigation.goBack()}/>
                    </TouchableOpacity>
                        <Text style={{fontSize:21,fontWeight:"bold",color:"white"}}>Payment History</Text>
                </View>
            </View>
            <View style={{alignItems:"center"}}>
                <View style={{flexDirection:"row",marginTop:20}}>
                    <Text style={{fontSize:19}}>{today.getDate()}/</Text>
                    <Text style={{fontSize:19}}>{today.getMonth()}/</Text>
                    <Text style={{fontSize:19}}>{today.getFullYear()}</Text>
                </View>
                <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"white",width:320,padding:10,marginTop:10,borderRadius:15,elevation:5}}> 
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Avatar.Text label= {name.slice(0,1)}/>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:19,fontWeight:"bold"}}>{matno}</Text>
                            <Text style={{fontSize:17}}>NGN{total}</Text>
                        </View>
                    </View>
                    <Text>{status == "successfull"?(<AntDesign name="checkcircle" size={24} color="green" />):(<AntDesign name="frown" size={24} color="red" />)}</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default PaymentHistory

const styles = StyleSheet.create({})