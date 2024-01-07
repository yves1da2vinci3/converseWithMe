import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'
import { hp } from '../../../constants/Responsive'
import { TextInput } from 'react-native'
import TextArea from '../../../components/TextArea'
import { ScrollView } from 'react-native'
import MessageItem from '../../../components/MessageItem'
import AwayMessageItem from '../../../components/AwayMessageItem'
import Drawer from '../../../components/Drawer'
import words from '../../../constants/words'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import {Colors} from '../../../constants/Colors'
import fontsVariants from '../../../config/fontsVariants'
const BotChatRoom = () => {
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
    const [message,setMessage] = useState("")
    const [selectedIndexes, setSelectedIndexes] = useState(new Map());
    const isPresent = (id) => selectedIndexes.has(id);
  
   
    const [isHintActive,setIsHintActive] = useState(false)
    const [DrawerOpen,setDrawerOpen] = useState(false)
    useEffect(()=>{
        navigation.setOptions({
            headerLeft : ()=> <Icon onPress={()=> navigation.goBack()} name='arrow-back' type='ionicon' />,
            headerRight : ()=> <Icon onPress={()=> setDrawerOpen(true)} name='library' type='ionicon' />
        })
    },[])

  return (
    <View className="bg-white flex-1 " >
      <Drawer isOpen={DrawerOpen} onClose={() => setDrawerOpen(false)}>
        <Text style={{fontFamily : fontsVariants.medium}} >Cliquez sur les mots pour afficher leurs définitions</Text>
        <View className="flex-1 mt-3">
          {/* Table */}
          {/* Header */}
          <View className="bg-blue-300 justify-between  h-10 flex-row"  >
            <View className="flex-1  items-center justify-center" >
            <Text style={{fontFamily : fontsVariants.semibold}} >Mots</Text>
            </View>
            <View className="flex-1  border-l-2 border-l-white items-center justify-center" >
            <Text style={{fontFamily : fontsVariants.semibold}} > Definition</Text>
            </View>
          </View>
          {/* Elements */}
          <ScrollView className="pb-4" showsVerticalScrollIndicator={false}>
          {words.map((word,index) => (
            <View key={word.id} className={` ${words.length -1 === index ? "mb-10" :""} justify-between  h-10 flex-row`}  >
            <View className="border flex-1 border-black items-center justify-center" >
            <Text style={{fontFamily : fontsVariants.regular}}>{word.label}</Text>
            </View>
            <View className="border flex-1 border-black items-center justify-center" >
            <Text style={{fontFamily : fontsVariants.regular}}>{word.meaning}</Text>
            </View>
          </View>
          ))}
          </ScrollView>
         
        </View>
      </Drawer>
      <ScrollView automaticallyAdjustContentInsets={true} showsVerticalScrollIndicator={false} className={`flex-1 `}>
        {/* Objetcif */}
      <View  className="bg-gray-200 flex-row m-3 flex-wrap rounded-lg p-4 h-auto"  >
        <Text style={{fontFamily : fontsVariants.semibold}} className="font-semibold" >Objectif :</Text>
        <Text style={{fontFamily : fontsVariants.regular}} >Vous rencontrez un sympathique
étranger âgé à l'arrêt de bus. Discutez
agréablement et pratiquez vos compétences
linguistiques.</Text>
      </View>
      {messages.map(message => (
    message.isMe ? (
    <MessageItem key={Math.random()} message={message} />
  ) : (
    <AwayMessageItem key={Math.random()} message={{ content: message.content }} />
  )
))}

{isHintActive &&  <View  className="bg-gray-200  flex-wrap rounded-lg p-2 h-auto"  >
        <Text  style={{fontFamily : fontsVariants.semibold}} className="font-semibold " >Reponse suggérés :</Text>
{/*   Answers */}
 {/* one answer */}
 <View className="flex-row mt-2 items-center" >
        <View className="h-auto flex-1 p-3 rounded-md border-2 items-center" >
        <Text style={{fontFamily : fontsVariants.regular}} >¡Buen día! Estoy bien gracias. ¿Y
usted mismo?</Text>
       </View>
        <View className="h-auto max-w-[25%] p-3 rounded-md  items-center" >
        <View  className="h-8 w-8 rounded-full bg-gray-100 items-center justify-center"  >
                <Icon type='ionicon' name='language' size={20} />
            </View>
       </View>
        </View>
       
    
      </View> }

      </ScrollView>

      {/* TextInput */}
      <View className="border-t-4 border-t-gray-300 px-2 pt-2" style={{ height : hp("16%") }} >
     <TextArea  value={message} setValue={setMessage} />

     {/* Options */}
     <View className="flex-1  px-2 justify-between flex-row items-center" >
        <View className="flex-row gap-x-2" >
            {/* translate */}
            <TouchableOpacity   className={`h-8 w-8 rounded-full bg-gray-100 items-center justify-center`}  >
                <Icon type='ionicon' name='language' size={20} />
            </TouchableOpacity>
            {/* Hint */}
            <TouchableOpacity onPress={()=> setIsHintActive(!isHintActive)} className={`h-8 w-24 flex-row gap-x-2  ${isHintActive ? `bg-amber-100` : "bg-gray-100" }  rounded-full s items-center justify-center`} >
            <Icon type='ionicon' name='color-wand' size={20} />
            <Text style={{fontFamily : fontsVariants.regular}} className="ml-2" >Indice</Text>
            </TouchableOpacity>
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

export default BotChatRoom