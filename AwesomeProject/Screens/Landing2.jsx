import { Image, StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { SafeAreaView } from 'react-native-safe-area-context'
import {FlatListSlider} from 'react-native-flatlist-slider';
const Landing2 = ({navigation}) => {
  const images= [
    
    {
      image: "https://media.istockphoto.com/id/512746852/photo/african-descent-female-graduate-and-friends-on-college-campus.jpg?s=612x612&w=0&k=20&c=fKZHhMTd_F8wM1zUsG6NrX20lFNT6F4_5lEs7m1X7AM="
    },
    {
      image: "https://media.istockphoto.com/id/1006213126/photo/beautiful-young-woman-with-books-and-digital-tablet-standing-at-window-in-campus.jpg?s=612x612&w=0&k=20&c=KIUPV1SrnQDVxq19Li7-6b7ncSpdm9iPq4aNKjIzqcA="
    },
    {
      image: "https://media.istockphoto.com/id/1201405182/photo/happy-university-student-in-library.jpg?s=612x612&w=0&k=20&c=rfESpSgKDjQ_coCGqYBPgYsnnuqfSyIIMXWt4gMHsMI="
    },
    {
      image: "https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk="
    },
    {
      image: "https://media.istockphoto.com/id/1269950687/photo/portrait-of-a-young-african-american-male-student-going-to-a-university.jpg?s=612x612&w=0&k=20&c=eQ7fzy2s7SnJENlyizMUk_pqPRjOZPO1dn02DHkOK0Y="
    },
    {
      image: "https://media.istockphoto.com/id/1384332902/photo/focused-young-woman.jpg?s=612x612&w=0&k=20&c=I67XpS-LTTxNtwjxW9bqaKGoGP4GBxQMVWop5qb--XM="
    },
    {
      image: "https://media.istockphoto.com/id/164548944/photo/college-students-in-computer-room.jpg?s=612x612&w=0&k=20&c=mAoAUIV-1vWapZVzZcuWOp0ROKN8y7ky8SGcNs6uYOQ="
    },
    {
      image: "https://media.istockphoto.com/id/1274854222/photo/young-black-female-student-sitting-in-classroom-and-preparing-for-final-test.jpg?s=612x612&w=0&k=20&c=MDm1wxiDdH6cnJWB5Z6CKwagyaRWKsnGtp_3AxB_Ctc="
    },
  ]
    return(
    <SafeAreaView style={styles.container1}>
        <View style={{backgroundColor:"white",alignItems:"center"}}>
        <View>
          <Image source={{uri:"data:image/jpeg;base64,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" }}
        style={{width:80,height:80}} />
        </View>
       <View style={{height:320}}>
        <FlatList data={images} renderItem={({item})=>(
        <View style={{margin:10}}>
          <Image source={{uri: item.image}} style={{width:280,height:300,borderRadius:10}}/>
        </View>
        )} horizontal={true} showsHorizontalScrollIndicator={true}/>
       </View>
       <View style={{marginTop:20}}>
        <Text style={{textAlign:"center",fontWeight:"bold"}}>Bells University of Technology</Text>
        <Text style={{textAlign:"center",fontSize:13,width:260,marginTop:5}}>Application,Registration, Payment and many more </Text>
       </View>
       <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={{backgroundColor:"blue",width:300,padding:15,borderRadius:3,marginTop:30}}>  
          <Text style={{color:"white", fontWeight:"600", fontSize:16,textAlign:"center"}}>LOGIN </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Sign")} style={{backgroundColor:"blue",width:300,padding:15,borderRadius:3,marginTop:20}}>  
          <Text style={{color:"white", fontWeight:"600", fontSize:16,textAlign:"center"}}>SIGN UP</Text>
        </TouchableOpacity>
        <Text style={{fontSize:11,marginTop:25}}>By continuing in you agree to the <Text style={{color:"blue"}}>Terms and Conditions</Text></Text>
        </View>
    </SafeAreaView>
  )
}

export default Landing2

const styles = StyleSheet.create({
    container1:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white",
        flex:1
    },
    
})