import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { auth, db } from '../firebase'
const ChatScreeen = () => {
  const[messages,setMessages] = useState([])
  useLayoutEffect(()=>{
    const collectionRef =  collection(db,'chats')
    const q  = query(collectionRef,orderBy('createdAt','desc'))
    const unsubscribe = onSnapshot(q,snapShot =>{
      console.log('snapshot')
      setMessages(
        snapShot.docs.map(doc => ({
          _id: doc.id,
          createdAt: new Date(),
          text: doc.data().text,
          user: doc.data().user
        }))
      )
    })
    return () => unsubscribe()
  },[])
  const onSend = useCallback((messages =[])=>{
    setMessages(previosMessages => GiftedChat.append(previosMessages,messages))
    const  {_id, createdAt, text,user} = messages[0]
    addDoc(collection(db,'chats'),{
      _id,
      createdAt,
      text,
      user
    })
  },[])
  return (
    <GiftedChat 
    messages={messages}
    onSend={messages=>onSend(messages)}
    user={{
      _id: auth?.currentUser?.email,
      avatar: 'https://placeimg.com/140/140/any'

    }}
    messagesContainerStyle={{
      backgroundColor:"#fff"
    }}
    />
  )
}

export default ChatScreeen

const styles = StyleSheet.create({})