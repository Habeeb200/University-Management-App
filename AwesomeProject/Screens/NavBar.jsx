import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Profile from './Profile';
import Guardian from './Guardian';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
const NavBar = ({navigation}) => {
  return (
    <View style={{backgroundColor:"white"}}>
        <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"blue",height:70,elevation:10}}>
          <View style={{flexDirection:"row",alignItems:"center",width:200,justifyContent:"space-evenly"}}>
              {/* <TouchableOpacity onPress={()=>navigation.goBack()}>
                <AntDesign name="left" size={27} color="white" />
              </TouchableOpacity> */}
              <View style={{flexDirection:"row",alignItems:"center"}}>
                  <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Your Profile</Text>
              </View>
          </View>
    </View>
    
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({})