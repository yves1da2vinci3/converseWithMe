import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import chatRoomsData from '../../../../mock/ChatRoom'
import ChatRoomItem from '../../../components/ChatRoomItem'
const ChatList = () => {
  return (
    <View className='flex-1 bg-white  ' >
      <FlatList data={chatRoomsData}  renderItem={({item}) => <ChatRoomItem  chatRoom={item} />} 
     showsHorizontalScrollIndicator={false}

     />
    </View>
  )
}

export default ChatList