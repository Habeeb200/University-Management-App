import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Profile from './Profile';
import Guardian from './Guardian';
const Tab = createMaterialTopTabNavigator();
const Top = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Personal Details" component={Profile} />
      <Tab.Screen name="Parent/Guardian" component={Guardian} />
    </Tab.Navigator>
  )
}

export default Top

const styles = StyleSheet.create({})