import { StyleSheet, Text, View,TouchableOpacity, Image, Linking, FlatList, TextInput,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { novel } from '../Novels';
const Library = ({navigation}) => {
    const [inputText,setInputText] = useState("")
    const javas = novel.filter((item)=>{
        return item.categories == "Java"
    })
    const software = novel.filter((item)=>{
        return item.categories == "Software Engineering"
    })
    const internet = novel.filter((item)=>{
        return item.categories == "Internet"
    })
    const web = novel.filter((item)=>{
        return item.categories == "Web Development"
    })
    const micro = novel.filter((item)=>{
        return item.categories == "Microsoft"
    })
    const python = novel.filter((item)=>{
        return item.categories == "Python"
    })
    const business = novel.filter((item)=>{
        return item.categories == "Business"
    })
    const client = novel.filter((item)=>{
        return item.categories == "Client-Server"
    })
    const programming = novel.filter((item)=>{
        return item.categories == "Programming"
    })
    const algorithm = novel.filter((item)=>{
        return item.categories == "Algorithmic Art"
    })
  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"blue",height:70,elevation:10}}>
          <View style={{flexDirection:"row",alignItems:"center",width:160,justifyContent:"space-evenly"}}>
              <TouchableOpacity>
                <AntDesign name="left" size={20} color="white" onPress={()=>navigation.goBack()}/>
              </TouchableOpacity>
                <Text style={{fontSize:21,fontWeight:"bold",color:"white"}}>Library</Text>
          </View>
     </View>
     <View style={{alignItems:"center"}}>
        <View style={{alignItems:"center",width:320,height:55,marginTop:20,borderRadius:30,backgroundColor:"white",flexDirection:"row",justifyContent:"space-between"}}>
            <TextInput placeholder='Search for books' value={inputText} onChangeText={(text)=>setInputText(text)} style={{paddingLeft:20}}/>
            <AntDesign name="search1" size={24} color="black" style={{paddingRight:20}}/>
        </View>
     </View>
     <ScrollView>
        <Text style={{fontWeight:"bold", fontSize:20,marginTop:10,marginHorizontal:15}}>Java</Text>
            <FlatList data={javas} renderItem={({item})=>{
                if(item.title.toLowerCase().includes(inputText.toLowerCase())){
                    return(
                        <TouchableOpacity style={{margin:10,height:240,borderRadius:15}} onPress={()=>navigation.navigate("bookdescription",{item})}>
                            <Image source={{uri: item.thumbnailUrl}} style={{width:170,height:120,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                            <View style={{width:170,backgroundColor:"white",padding:10,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                                <Text style={{fontWeight:"600", fontSize:15}}>{item.title}</Text>
                                <Text style={{fontWeight:"300", fontSize:13}}><Text style={{fontWeight:"bold"}}>By:</Text> {item.authors.slice(0)}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                } 
            }
            } horizontal={true}/>
        <Text style={{fontWeight:"bold", fontSize:20,marginTop:10,marginHorizontal:15}}>Software Engineering</Text>
            <FlatList data={software} renderItem={({item})=>{
                 if(item.title.toLowerCase().includes(inputText.toLowerCase())){
                    return(
                        <TouchableOpacity style={{margin:10,height:240,borderRadius:15}} onPress={()=>navigation.navigate("bookdescription",{item})}>
                            <Image source={{uri: item.thumbnailUrl}} style={{width:170,height:120,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                            <View style={{width:170,backgroundColor:"white",padding:10,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                                <Text style={{fontWeight:"600", fontSize:15}}>{item.title}</Text>
                                <Text style={{fontWeight:"300", fontSize:13}}><Text style={{fontWeight:"bold"}}>By:</Text> {item.authors.slice(0)}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                } 
            }
            } horizontal={true}/>
        <Text style={{fontWeight:"bold", fontSize:20,marginTop:10,marginHorizontal:15}}>Internet</Text>
            <FlatList data={internet} renderItem={({item})=>{
                 if(item.title.toLowerCase().includes(inputText.toLowerCase())){
                    return(
                        <TouchableOpacity style={{margin:10,height:240,borderRadius:15}} onPress={()=>navigation.navigate("bookdescription",{item})}>
                            <Image source={{uri: item.thumbnailUrl}} style={{width:170,height:120,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                            <View style={{width:170,backgroundColor:"white",padding:10,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                                <Text style={{fontWeight:"600", fontSize:15}}>{item.title}</Text>
                                <Text style={{fontWeight:"300", fontSize:13}}><Text style={{fontWeight:"bold"}}>By:</Text> {item.authors.slice(0)}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                } 
            }
            } horizontal={true}/>
        <Text style={{fontWeight:"bold", fontSize:20,marginTop:10,marginHorizontal:15}}>Web Development</Text>
            <FlatList data={web} renderItem={({item})=>{ 
                 if(item.title.toLowerCase().includes(inputText.toLowerCase())){
                    return(
                        <TouchableOpacity style={{margin:10,height:240,borderRadius:15}} onPress={()=>navigation.navigate("bookdescription",{item})}>
                            <Image source={{uri: item.thumbnailUrl}} style={{width:170,height:120,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                            <View style={{width:170,backgroundColor:"white",padding:10,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                                <Text style={{fontWeight:"600", fontSize:15}}>{item.title}</Text>
                                <Text style={{fontWeight:"300", fontSize:13}}><Text style={{fontWeight:"bold"}}>By:</Text> {item.authors.slice(0)}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                } 
            }} horizontal={true}/>
        <Text style={{fontWeight:"bold", fontSize:20,marginTop:10,marginHorizontal:15}}>Microsoft</Text>
            <FlatList data={micro} renderItem={({item})=>{ 
                 if(item.title.toLowerCase().includes(inputText.toLowerCase())){
                    return(
                        <TouchableOpacity style={{margin:10,height:240,borderRadius:15}} onPress={()=>navigation.navigate("bookdescription",{item})}>
                            <Image source={{uri: item.thumbnailUrl}} style={{width:170,height:120,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                            <View style={{width:170,backgroundColor:"white",padding:10,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                                <Text style={{fontWeight:"600", fontSize:15}}>{item.title}</Text>
                                <Text style={{fontWeight:"300", fontSize:13}}><Text style={{fontWeight:"bold"}}>By:</Text> {item.authors.slice(0)}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                } 
            }} horizontal={true}/>
        <Text style={{fontWeight:"bold", fontSize:20,marginTop:10,marginHorizontal:15}}>Python</Text>
            <FlatList data={python} renderItem={({item})=>{ 
                 if(item.title.toLowerCase().includes(inputText.toLowerCase())){
                    return(
                        <TouchableOpacity style={{margin:10,height:240,borderRadius:15}} onPress={()=>navigation.navigate("bookdescription",{item})}>
                            <Image source={{uri: item.thumbnailUrl}} style={{width:170,height:120,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                            <View style={{width:170,backgroundColor:"white",padding:10,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                                <Text style={{fontWeight:"600", fontSize:15}}>{item.title}</Text>
                                <Text style={{fontWeight:"300", fontSize:13}}><Text style={{fontWeight:"bold"}}>By:</Text> {item.authors.slice(0)}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                } 
            }} horizontal={true}/>
        <Text style={{fontWeight:"bold", fontSize:20,marginTop:10,marginHorizontal:15}}>Business</Text>
            <FlatList data={business} renderItem={({item})=>{ 
                 if(item.title.toLowerCase().includes(inputText.toLowerCase())){
                    return(
                        <TouchableOpacity style={{margin:10,height:240,borderRadius:15}} onPress={()=>navigation.navigate("bookdescription",{item})}>
                            <Image source={{uri: item.thumbnailUrl}} style={{width:170,height:120,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                            <View style={{width:170,backgroundColor:"white",padding:10,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                                <Text style={{fontWeight:"600", fontSize:15}}>{item.title}</Text>
                                <Text style={{fontWeight:"300", fontSize:13}}><Text style={{fontWeight:"bold"}}>By:</Text> {item.authors.slice(0)}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                } 
            }} horizontal={true}/>
        <Text style={{fontWeight:"bold", fontSize:20,marginTop:10,marginHorizontal:15}}>Client-Server</Text>
            <FlatList data={client} renderItem={({item})=>{ 
                 if(item.title.toLowerCase().includes(inputText.toLowerCase())){
                    return(
                        <TouchableOpacity style={{margin:10,height:240,borderRadius:15}} onPress={()=>navigation.navigate("bookdescription",{item})}>
                            <Image source={{uri: item.thumbnailUrl}} style={{width:170,height:120,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                            <View style={{width:170,backgroundColor:"white",padding:10,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                                <Text style={{fontWeight:"600", fontSize:15}}>{item.title}</Text>
                                <Text style={{fontWeight:"300", fontSize:13}}><Text style={{fontWeight:"bold"}}>By:</Text> {item.authors.slice(0)}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                } 
            }} horizontal={true}/>
        <Text style={{fontWeight:"bold", fontSize:20,marginTop:10,marginHorizontal:15}}>Programming</Text>
            <FlatList data={programming} renderItem={({item})=>{ 
                 if(item.title.toLowerCase().includes(inputText.toLowerCase())){
                    return(
                        <TouchableOpacity style={{margin:10,height:240,borderRadius:15}} onPress={()=>navigation.navigate("bookdescription",{item})}>
                            <Image source={{uri: item.thumbnailUrl}} style={{width:170,height:120,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                            <View style={{width:170,backgroundColor:"white",padding:10,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                                <Text style={{fontWeight:"600", fontSize:15}}>{item.title}</Text>
                                <Text style={{fontWeight:"300", fontSize:13}}><Text style={{fontWeight:"bold"}}>By:</Text> {item.authors.slice(0)}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                } 
            }} horizontal={true}/>
        
     </ScrollView>
    </View>
  )
}

export default Library

const styles = StyleSheet.create({})