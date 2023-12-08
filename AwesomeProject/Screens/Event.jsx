import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Agenda } from 'react-native-calendars';
import { Avatar, Card } from 'react-native-paper';
const timeToString = (time)=> {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
const Event = ({route}) => {
    const {predefinedEvents} = route.params
    const [items,setItems] = useState({})
    const loadItems = (day) => {  
      setItems({});  
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 2 ;
                const strTime =timeToString(time);
                predefinedEvents.map((event) => {
                    const strTime = timeToString(new Date(event.day).getTime());
                    if (!items[strTime]) {
                      items[strTime] = [];
                    }
                    items[strTime].push({
                      name: event.name,
                      height: Math.max(50, Math.floor(Math.random() * 150)),
                      day: strTime,
                    });
                  })}
        const newItems =  {};
            Object.keys(items).forEach((key) => {
            newItems[key] = items[key];
            });
            setItems(newItems);
            }, 1000);
        }    
        const renderItem=(item)=>{
            return(
            <TouchableOpacity style={{marginRight:10, marginTop:17}}>
                <Card>
                    <Card.Content>
                        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                            <Text>{item.name}</Text>
                            <Avatar.Text label='H'/>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>)
        }  
  return (
    <View style={{flex:1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2023-11-21'}
        renderItem={renderItem}
    />
    </View>
  )
}

export default Event

const styles = StyleSheet.create({})