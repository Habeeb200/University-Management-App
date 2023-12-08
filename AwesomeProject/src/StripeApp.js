import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { CardField,useConfirmPayment } from '@stripe/stripe-react-native'
import { Alert } from 'react-native'
const API_URL ="https://localhost:3000"
const StripeApp = () => {
    const[email,setEmail] = useState()
    const[cardDetails,setCardDetails] = useState()
    const {confirmPayment, Loading} = useConfirmPayment()
    const handlePay = async()=>{
        if(!cardDetails?.complete || !email){
            Alert.alert("Please enter complete card details and email");
            return;
        }
        const billingDetails = {
            email:email
        }
        try{
            const{clientSecret, error} = await fetchPaymentIntentClientSecret();
            if(error){
                console.log("Unable to process payment")
            }else{
                const{paymentIntent,error} = await confirmPayment(clientSecret, {
                    type: "Card",
                    billingDetails: billingDetails
                });
                if(error){
                    alert(`Payment Confirmation Error ${error.message}`)
                }else if(paymentIntent){
                    alert("Payment Sucessfull")
                    console.log("Payment successfull ", paymentIntent)
                }
            }
        }catch(e){
            console.log(e)
        }
    }
    const fetchPaymentIntentClientSecret = async()=>{
        const response = await fetch(`${API_URL}/ create-payment-intent`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            }
        })
        const  {clientSecret,error} = await response.json()
        return {clientSecret,error}
    }
  return (
    <View style={{flex:1,margin:20}}>
        <TextInput autoCapitalize='none' placeholder='Email' keyboardType='email-address' onChange={value=>setEmail (value.nativeEvent.text)}/>
        <CardField  cardStyle={styles.card} style={styles.cardContainer} placeholders={{number: "4242 4242 4242 4242"}} onCardChange={(value)=>setCardDetails(value)}/>
        <Button title='Pay Now' onPress={handlePay}/>
    </View>
  )
}

export default StripeApp

const styles = StyleSheet.create({
    card:{
        backgroundColor:"#efefefef"
    },
    cardContainer:{
        height:50,
        marginVertical:50
    }
})