import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const UserProfile = ({route,navigation}) => {
    const{user} = route.params
    const handleChat =()=>{
        navigation.navigate("chat", {user})
    }
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
    <View >
      <View style={{alignItems:"center",marginTop:30}}> 
        <Image source={{uri: user.image}} style={{width:190,height:190,borderRadius:190}}/>
        <ScrollView contentContainerStyle={{paddingTop:10,paddingLeft:20}}>
            <View style={styles.service}>
                <Text style={{fontSize:15,marginLeft:15,fontWeight:"500",opacity:0.6}}>FULL Name</Text>
                <Text style={{fontSize:18,marginLeft:15,fontWeight:"500"}}>{user.name}</Text>
            </View>
             <View style={styles.service}>
                <Text style={{fontSize:15,marginLeft:15,fontWeight:"500",opacity:0.6}}>Matric No</Text>
                <Text  style={{fontSize:18,marginLeft:25,fontWeight:"500"}}>{user.matno}</Text>
            </View>
            <View style={styles.service}>
                <Text style={{fontSize:15,marginLeft:15,fontWeight:"500",opacity:0.6}}>Department</Text>
                <Text  style={{fontSize:18,marginLeft:15,fontWeight:"500"}}></Text>
            </View>
            <View style={styles.service}>
                <Text style={{fontSize:15,marginLeft:15,fontWeight:"500",opacity:0.6}}>Entry Year</Text>
                <Text  style={{fontSize:18,marginLeft:15,fontWeight:"500"}}>{user.year}</Text>
            </View>
            <TouchableOpacity style={{backgroundColor:"blue",width:300,padding:15,borderRadius:3,marginTop:25,alignItems:"center"}} onPress={handleChat}>  
                <FontAwesome name="wechat" size={28} color="white" />
            </TouchableOpacity>
        </ScrollView>
        </View>
    </View>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
    service:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:0.3,
        width:320,
        paddingBottom:15,
        opacity:0.8,
        marginVertical:10,
        borderColor:"gray"
      }
})