import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { hp } from '../constants/Responsive'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

const ChatItem = () => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate("chatRoom") }  className="bg-red-100 my-4 rounded-2xl flex shadow-md" style={{ height : hp("35%") }}  >
          {/* Image */}
          <View className="flex-1 " >
            <Image className="object-contain flex-1 rounded-t-2xl"  source={{ uri : "https://www.hotel-lechapitre.com/bases/diaporama_image/grande/17/Ch-superieure-hotel-spa-Vosges-Le-Chapitre.jpg"}} />
          </View>
          {/* Informations */}

            {/* Level */}
          <View className="bg-transparent absolute bottom-12  mb-0 " style={{ height : "15%"}} >
            <View className="bg-white rounded-tr-full w-32 p-3 " >
              <Text>Intermediare</Text>
            </View>
          </View>
            {/* Title */}
          <View className=" bg-gray-100 mt-0 justify-center p-2 px-2 rounded-b-2xl " style={{ height : "20%"}} >
            {/* Title */}
              <Text className="text-lg" style={{ fontSize : hp(2) }} >Saluer la receptioniste</Text>
          </View>
        </TouchableOpacity>
  )
}

export default ChatItem