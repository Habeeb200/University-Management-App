import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StripeApp from '../src/StripeApp'
import { StripeProvider } from '@stripe/stripe-react-native'

const Payments3 = () => {
  return (
    <StripeProvider publishableKey='pk_test_51OGLEDEHncsORcbGCA9tRZoMa6XFIiMuSPRVSvoSpmQuzeRFg9KFSG4n3dR3OJDc0qhanUT8Sukd88HX9KLXrwAi00thB88P10'>
        <StripeApp/>
    </StripeProvider>
  )
}

export default Payments3

const styles = StyleSheet.create({})