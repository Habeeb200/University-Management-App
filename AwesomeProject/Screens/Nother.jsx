import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import All from './All';
import Home from './Home';
import Library from './Library';
import Transport from './Transport';
import Emergency from './Emergency';
import Event from './Event';
import Tour from './Tour';
const Drawer = createDrawerNavigator();
const Nother = () => {
  return (
      <Drawer.Navigator screenOptions={{headerShown:"false"}}>
        <Drawer.Screen name="Homer" component={All} options={{headerShown:false}} />
        <Drawer.Screen name="Tour " component={Tour} options={{headerShown:false}}/>
        <Drawer.Screen name="Library" component={Library} options={{headerShown:false}} />
        <Drawer.Screen name="Transportation" component={Transport} options={{headerShown:false}} />
        <Drawer.Screen name="Emergency" component={Emergency} options={{headerShown:false}}/>
      </Drawer.Navigator>
  )
}

export default Nother

const styles = StyleSheet.create({})