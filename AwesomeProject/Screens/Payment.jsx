import { ActivityIndicator, Alert, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import  { Paystack , paystackProps}  from 'react-native-paystack-webview';
import { TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { auth, db } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { getDoc,updateDoc } from "firebase/firestore";

const {width,height} = Dimensions.get("window")
const Payment = ({navigation}) => {
    const paystackWebViewRef = useRef(paystackProps.PayStackRef); 
    let fees = 400000
    let alumni = 10000
    let lab = 50000
    let clinic = 150000
    let ict = 15000
    let hostel = 150000
    let total  = ict
    const [email,setEmail] = useState("")
    const [paid,setPaid] = useState("")
    const updateDocument = async()=>{
        const washingtonRef = doc(db, "Users Info", auth.currentUser.uid);
        await updateDoc(washingtonRef, {
            status : "successfull"
        });
    }
    const fetchFromStore=async()=>{
        const docRef = doc(db, "Users Info", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
        setEmail(docSnap.data().email);
        setPaid(docSnap.data().status);
        } else {
        console.log("No such document!");
        }
    }
    const addTransactionDetails = async()=>{
        await setDoc(doc(db, "Users Info", auth.currentUser.uid), {
            total,
          }, { merge: true });
    }
    useEffect(() => {
        const fetchData = async () => {
        //   await addToStore();
          await fetchFromStore();
        };
        fetchData();
      }, []);
  return (
    <View style={{flex: 1,backgroundColor:"white"}}>
        {paid == "" ? <ActivityIndicator size={70} style={{marginTop:290}}/> :( paid == "unsuccessfull" ?(
        <View>
            <Paystack
            paystackKey="pk_test_215e131b1fcfb45b168c78508ed83ee53d0e52a7"
            payStackSecretKey = "sk_test_8e806842a61f7c324badbdd8fb11f86b8b07b1a0"
            billingEmail={email}
            billingMobile = "09045579254"
            billingName = "habeeb"
            currency='NGN'
            amount='2000'
            onCancel={(e) => {
                setPaid("unsuccessfull")
            }}
            onSuccess={(res) => {
              setPaid("sucessfull")
                updateDocument()
                addTransactionDetails()
                navigation.navigate("Homer")
            }}
            ref={paystackWebViewRef}
          />
          <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"blue",height:70,elevation:10}}>
            <View style={{flexDirection:"row",alignItems:"center",width:150,justifyContent:"space-evenly"}}>
                <TouchableOpacity>
                    <AntDesign name="left" size={20} color="white" onPress={()=>navigation.goBack()}/>
                </TouchableOpacity>
                    <Text style={{fontSize:21,fontWeight:"bold",color:"white"}}>Payment</Text>
            </View>
         </View>
            <View style={{alignItems:"center"}}>
                <View style={styles.service} onPress={()=>navigation.navigate("pay")}>
                    <Text style={{fontSize:15,fontWeight:"500",marginRight:50}}>School Fees</Text>
                    <Text style={{fontSize:15,fontWeight:"500"}}>NGN {fees}</Text>
                </View>
                <View style={styles.service} onPress={()=>navigation.navigate("pay")}>
                    <Text style={{fontSize:15,fontWeight:"500",marginRight:50}}>Alumni</Text>
                    <Text style={{fontSize:15,fontWeight:"500"}}>NGN {alumni}</Text>
                </View>
                <View style={styles.service} onPress={()=>navigation.navigate("pay")}>
                    <Text style={{fontSize:15,fontWeight:"500",marginRight:50}}>Laboratory</Text>
                    <Text style={{fontSize:15,fontWeight:"500"}}>NGN {lab}</Text>
                </View>
                <View style={styles.service} onPress={()=>navigation.navigate("pay")}>
                    <Text style={{fontSize:15,fontWeight:"500",marginRight:50}}>Clinic</Text>
                    <Text style={{fontSize:15,fontWeight:"500"}}>NGN {clinic}</Text>
                </View>
                <View style={styles.service} onPress={()=>navigation.navigate("pay")}>
                    <Text style={{fontSize:15,fontWeight:"500",marginRight:50}}>ICT</Text>
                    <Text style={{fontSize:15,fontWeight:"500"}}>NGN {ict}</Text>
                </View>
                <View style={styles.service} onPress={()=>navigation.navigate("pay")}>
                    <Text style={{fontSize:15,fontWeight:"500",marginRight:50}}>HOSTEL</Text>
                    <Text style={{fontSize:15,fontWeight:"500"}}>NGN {hostel}</Text>
                </View>
                <View style={styles.service} onPress={()=>navigation.navigate("pay")}>
                    <Text style={{fontSize:15,fontWeight:"500",marginRight:50}}>TOTAL</Text>
                    <Text style={{fontSize:15,fontWeight:"500"}}>NGN {total}</Text>
                </View>
                <TouchableOpacity style={{backgroundColor:"blue",width:300,padding:15,borderRadius:3,marginTop:25}} onPress={()=>paystackWebViewRef.current.startTransaction()}>  
                    <Text style={{color:"white", fontWeight:"600", fontSize:16,textAlign:"center"}}>PAY NOW</Text>
                </TouchableOpacity>
            </View>
        </View>):
            <View
            style={{alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
                <Image source={{uri : "https://media.istockphoto.com/id/1344977179/vector/green-check-mark-icon-isolated-on-white-background-3d-render-vector-illustration.jpg?s=612x612&w=0&k=20&c=kGiKOG7ZaXms_Tgy22OPqUsuDJLeaLP4IczKhTnyl6w="}} style={{width:370,height:370}}/>
                <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold",marginHorizontal:10}}>Payment Verified you can register your courses</Text>
            </View>
            )}
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
    service:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:0.3,
        width:width,
        paddingBottom:15,
        opacity:0.8,
        marginVertical:15,
        borderColor:"gray",
        justifyContent:"space-around"
      }
})
// 