import { Image, StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'

const BookDescription = ({route}) => {
    const{item} = route.params
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
        <ScrollView>
            <View style={{alignItems:"center"}}>
                <Image source={{uri: item.thumbnailUrl}} style={{width:320,height:260, borderRadius:10}}/>
                <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Title: {item.title}</Text>
                <Text style={{fontWeight:"bold",marginVertical:10}}>isbn no:{item.isbn}</Text>
                <Text style={{fontWeight:"bold",marginBottom:10}}>No of pages: {item.pageCount}</Text>
                <Text style={{fontWeight:"bold",marginBottom:10}}>By: {item.authors}</Text>
                <Text style={{marginLeft:5}}>{item.longDescription}</Text>
                <TouchableOpacity style={{backgroundColor:"blue",width:330,padding:15,borderRadius:3,marginTop:25}}>  
                    <Text style={{color:"white", fontWeight:"600", fontSize:16,textAlign:"center"}}>READ</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  )
}

export default BookDescription

const styles = StyleSheet.create({})