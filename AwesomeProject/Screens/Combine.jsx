import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from './NavBar'
import Top from './Top'
import { NavigationContainer } from '@react-navigation/native';
import ProfileHeader from './ProfileHeader';
const Combine = ({navigation}) => {
  return (
    <NavigationContainer independent={true}>
         <ProfileHeader navigation={navigation}/>
          <Top/>
    </NavigationContainer>

  )
}

export default Combine

const styles = StyleSheet.create({})