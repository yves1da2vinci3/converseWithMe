import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { hp } from '../../constants/Responsive'
import { Image } from 'react-native'
import ChatItem from '../../components/ChatItem'
import chatBotImage from '../../../assets/chatbot.png'
import chatPeopleImage from '../../../assets/conversation.png'
import fontsVariants from '../../config/fontsVariants'
const ChatHome = (props) => {

  return (
    <View className="p-2 pt-10 flex-1 bg-white" >
      <Text style={{fontFamily : fontsVariants.black}} className="text-2xl mt-10 text-center" >Choississez votre type de communication</Text>
      <View  className="flex-1  flex" >
        <TouchableOpacity onPress={()=>props.navigation.navigate("chatbotHome")} className=" items-center p-2 flex-1" >
          <Image source={chatBotImage} className="bg-white  h-52 w-52 rounded-full"  />
      <Text style={{fontFamily : fontsVariants.semibold}} className="text-2xl font-semibold mt-10 text-center" >Chattez avec une IA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.navigation.navigate("chathumanHome")} className=" p-2 items-center flex-1" >
        <Image source={chatPeopleImage} className=" h-52 w-52 rounded-full"  />
      <Text style={{fontFamily : fontsVariants.semibold}} className="text-2xl font-semibold mt-10 text-center" >Chattez avec une personne</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChatHome