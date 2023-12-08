import { StyleSheet, Text, View,TouchableOpacity, Image, Linking } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const Transport = ({navigation}) => {
    const drivers= [
        {
            name:"Mike",
            telephone: "09045579254",
            image: "https://media.istockphoto.com/id/1218844586/photo/portrait-of-african-man-inside-a-car.jpg?s=612x612&w=0&k=20&c=JC1_EadXwBeiKsVdPRgXKhp_zlCv9_hEZ6Hwjxpju48="
        },
        {
            name:"Trevor",
            telephone: "09045579254",
            image: "https://media.istockphoto.com/id/1146609313/photo/african-man-using-his-phone-while-driving-in-the-rain.jpg?s=612x612&w=0&k=20&c=hCftCl3JbERQkun6CMf2iaZeAWtsgRKwTCrNkbjkBiM="
        },
        {
            name:"Gray",
            telephone: "09045579254",
            image: "https://media.istockphoto.com/id/1448382371/photo/happy-young-african-american-man-driving-a-car-and-using-smart-phone.jpg?s=612x612&w=0&k=20&c=ODsj2JEyus3n0RNI4Pm4xC36Fl1osFV3-CzMKBdpsNg="
        },
        {
            name:"Daniel",
            telephone: "09045579254",
            image: "https://media.istockphoto.com/id/1448382371/photo/happy-young-african-american-man-driving-a-car-and-using-smart-phone.jpg?s=612x612&w=0&k=20&c=ODsj2JEyus3n0RNI4Pm4xC36Fl1osFV3-CzMKBdpsNg="
        },
        {
            name:"Lola",
            telephone: "09045579254",
            image: "https://media.istockphoto.com/id/1154420280/photo/cheerful-group-of-multi-ethnic-friends-on-road-trip.jpg?s=612x612&w=0&k=20&c=6HVOJiSx-vQwkTah__ENdEc0LrDZCI-0uyWTIJGC-p8="
        },
    ]
    let each = drivers[Math.floor(Math.random()*5)]
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"blue",height:70,elevation:10}}>
          <View style={{flexDirection:"row",alignItems:"center",width:160,justifyContent:"space-evenly"}}>
              <TouchableOpacity>
                <AntDesign name="left" size={20} color="white" onPress={()=>navigation.goBack()}/>
              </TouchableOpacity>
                <Text style={{fontSize:21,fontWeight:"bold",color:"white"}}>Call a ride</Text>
          </View>
     </View>
     <View style={{alignItems:"center"}}>
        <Image source={{uri: each.image}} style={{width:200,height:200,borderRadius:200,marginTop:30}}/>
        <Text style={{fontSize:25,fontWeight:"500",marginTop:20}}>{each.name}</Text>
        <TouchableOpacity style={{backgroundColor:"blue",width:300,padding:15,borderRadius:3,marginTop:25,alignItems:"center"}} onPress={()=>Linking.openURL(`tel: ${each.telephone}`)}>  
            <FontAwesome5 name="phone" size={28} color="white" />
        </TouchableOpacity>
     </View>
    </View>
  )
}

export default Transport

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
})