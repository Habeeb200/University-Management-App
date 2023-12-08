import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const ProfileHeader = ({navigation}) => {
  return (
    <View style={{backgroundColor:"white"}}>
        <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"blue",height:70,elevation:10}}>
          <View style={{flexDirection:"row",alignItems:"center",width:200,justifyContent:"space-evenly"}}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                <AntDesign name="left" size={27} color="white" />
              </TouchableOpacity>
              <View style={{flexDirection:"row",alignItems:"center"}}>
                  <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Your Profile</Text>
              </View>
          </View>
    </View>
    
    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({})