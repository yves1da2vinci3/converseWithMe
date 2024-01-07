import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { hp } from '../../../constants/Responsive'
import ChatItem from '../../../components/ChatItem'
import fontsVariants from '../../../config/fontsVariants'
const ChatbotHome = () => {
  const filters = [
    {
      id : 0,
      name : "tout"
    },
    {
      id : 1,
      name : "terminé"
    },
    {
      id : 2,
      name : "pas terminé"
    },
  ]
  const [selectedId,setSelectedId] = useState(0)
  return (
    <View className="p-2 pt-10 flex-1 bg-white" >
      {/* Filter */}
      <View className=" flex-row gap-x-3 items-center" style={{ height :hp(8)}} >
        { filters.map((fi)=>(
          <TouchableOpacity onPress={()=> setSelectedId(fi.id)} key={fi.id} className={`h-12 p-2 px-5 min-w-24 min-w-0 ${fi.id === selectedId ? "border-2 border-amber-200 border-b-8 border-b-amber-600" : "border-2 border-gray-400" }  items-center justify-center rounded-full bg-white`} >
            <Text style={{fontFamily : fontsVariants.regular}} >{fi.name}</Text>
          </TouchableOpacity>
        ) ) }
      </View>

      {/* Conversations */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {[1,2,3,4,5,6,7,8,9,10,11].map((val)=> (
          <ChatItem key={val} />
        ))}
      </ScrollView>
    </View>
  )
}

export default ChatbotHome