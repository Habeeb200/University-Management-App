import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Settings from './Settings';
import MapVie from './MapVie';
import Search from './Search';
const Tab = createBottomTabNavigator();
const All = () => {
  return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon:()=>(  
            <Image source={require("../assets/images/bells.png")} style={{width:32, height:32}}/>
          ), tabBarShowLabel:false}}/>
        <Tab.Screen name="Search" component={Search}  options={{
          tabBarIcon:()=>(  
            <AntDesign name="search1" size={27} color="black" />
          ), tabBarShowLabel:false}}/>
        <Tab.Screen name="Map" component={MapVie} options={{
          tabBarIcon:()=>(  
            <Feather name="map" size={27} color="black" />
          ), tabBarShowLabel:false}} />
        <Tab.Screen name="Settings" component={Settings} options={{
          tabBarIcon:()=>(  
            <Ionicons name="settings" size={27} color="black" />
          ), tabBarShowLabel:false}}/>
      </Tab.Navigator>
  )
}

export default All

const styles = StyleSheet.create({})