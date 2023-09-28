import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChatHome from '../../screens/chat/ChatHome'
import ChatRoom from '../../screens/chat/ChatRoom'
import ChatbotHome from '../../screens/chat/ChatbotHome'

const ChatStack = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{ headerShown : false }} >
      <Stack.Screen options={{ headerShown : false ,title : "" }} name='chatHome' component={ChatHome} />
      <Stack.Screen name='chatbotHome' component={ChatbotHome} />
      <Stack.Screen options={{ headerShown : true ,title : "" }} name='chatRoom' component={ChatRoom} />
    </Stack.Navigator>
  )
}

export default ChatStack