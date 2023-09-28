import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'
import { hp } from '../../constants/Responsive'
import { TextInput } from 'react-native'
import TextArea from '../../components/TextArea'
import { ScrollView } from 'react-native'
import MessageItem from '../../components/MessageItem'
import AwayMessageItem from '../../components/AwayMessageItem'

const ChatRoom = () => {
    const messages = [
        {
          content: "Salut ! Comment ça va ?",
          isMe: false,
        },
        {
          content: "Bonjour ! Je vais bien, merci. Vous parlez quelle langue ?",
          isMe: true,
        },
        {
          content: "Je parle anglais, et vous ?",
          isMe: false,
        },
        {
          content: "Moi aussi ! C'est génial.",
          isMe: true,
        },
        {
          content: "Où allez-vous aujourd'hui ?",
          isMe: false,
        },
        {
          content: "Je vais au musée. C'est ma première fois dans cette ville.",
          isMe: true,
        },
        {
          content: "Le musée est un excellent endroit à visiter. Vous allez adorer !",
          isMe: false,
        },
        {
          content: "Merci ! J'espère que vous passez une bonne journée.",
          isMe: true,
        },
        {
          content: "Oui, ma journée se passe bien. Profitez de votre visite au musée !",
          isMe: false,
        },
      ];
    const navigation = useNavigation()

    useEffect(()=>{
        navigation.setOptions({
            headerLeft : ()=> <Icon onPress={()=> navigation.goBack()} name='arrow-back' type='ionicon' />
        })
    },[])
    const [message,setMessage] = useState("")
  return (
    <View className="bg-white flex-1 " >
      
      <ScrollView automaticallyAdjustContentInsets={true} showsVerticalScrollIndicator={false} className={`flex-1 `}>
        {/* Objetcif */}
      <View  className="bg-gray-200 flex-row m-3 flex-wrap rounded-lg p-4 h-auto"  >
        <Text className="font-semibold" >Objectif :</Text>
        <Text >Vous rencontrez un sympathique
étranger âgé à l'arrêt de bus. Discutez
agréablement et pratiquez vos compétences
linguistiques.</Text>
      </View>
      {messages.map(message => (
    message.isMe ? (
    <MessageItem key={message._id} message={message} />
  ) : (
    <AwayMessageItem key={message._id} message={{ content: message.content }} />
  )
))}
      </ScrollView>

      {/* TextInput */}
      <View className="border-t-4 border-t-gray-300 px-2 pt-2" style={{ height : hp("16%") }} >
     <TextArea value={message} setValue={setMessage} />

     {/* Options */}
     <View className="flex-1  px-2 justify-between flex-row items-center" >
        <View className="flex-row gap-x-2" >
            {/* translate */}
            <View  className="h-8 w-8 rounded-full bg-gray-100 items-center justify-center"  >
                <Icon type='ionicon' name='language' size={20} />
            </View>
            {/* Hint */}
            <View className="h-8 w-24 flex-row gap-x-2 rounded-full bg-gray-100 items-center justify-center" >
            <Icon type='ionicon' name='color-wand' size={20} />
            <Text className="ml-2" >Indice</Text>
            </View>
            {/* Vocal */}
            <View  className="h-8 w-8 rounded-full bg-gray-100 items-center justify-center"  >
                <Icon type='ionicon' name='mic' size={20} />
            </View>
        </View>

        {/* send message */}
        <View  className="h-8 w-8 rounded-full bg-gray-100 items-center justify-center"  >
                <Icon type='ionicon' name='paper-plane' size={20} />
            </View>
     </View>
      </View>
    </View>
  )
}

export default ChatRoom