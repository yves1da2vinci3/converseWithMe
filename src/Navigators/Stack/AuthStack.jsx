import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../../screens/auth/Login'
import HomeAuth from '../../screens/auth/HomeAuth'
import Signup from '../../screens/auth/Signup'

const AuthStack = () => {
    const Stack  = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown : false}} >
    <Stack.Screen name='homeAuth' component={HomeAuth}  />
    <Stack.Screen name='login' component={Login}  />
    <Stack.Screen name='register' component={Signup}  />
    </Stack.Navigator>
  )
}

export default AuthStack