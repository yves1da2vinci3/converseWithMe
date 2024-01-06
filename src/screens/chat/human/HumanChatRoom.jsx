import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import Message from '../../../components/HumanChatMessage'
import messages from '../../../../mock/Messages'
import Colors from '../../../constants/Colors'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Icon } from '@rneui/base'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from '@rneui/themed'
const HumanChatRoom = () => {
  const [message,setMessage] = useState('')
  const navigation = useNavigation()
  useEffect(() => {
    
    navigation.setOptions({
      title: "    SEKO",
      headerBackVisible: false,
      headerTintColor: "white",
      headerLeft: () => <Avatar  size={40} rounded={true} source={{ uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" }} />,
      headerStyle: { backgroundColor: `${Colors.goldColor}` },
      headerRight: () => (
        <View  className={ `flex flex-row justify-between items-center`}>
          <Icon style={{ marginRight : 10}} className={ `mr-4`} name='phone' type='font-awesome' color='white' />
          <Icon name='videocam-outline' type='ionicon' color='white' />
        </View>
      )
    })
  }, [])
  return (
    <View className={`flex-1 bg-white relative p-2 flex`}>
    {/* Body Message */}
    <ScrollView automaticallyAdjustContentInsets={true} showsVerticalScrollIndicator={false} className={ `flex-1 `}>
      { messages.map(message => (<Message key={message._id} message={{ content: `${message.content}`, isMe: message.isMe}} />))}
    </ScrollView>
    {/* MessageInput */}
    <View className={ `h-14   flex flex-row justify-center items-center   w-full self-center`}>
      <View className={ `h-10  border-2 border-gray-300 bg-white flex-1 flex-row items-center px-2 rounded-full `}>
        <Icon type='ionicon' name='happy-outline' color="black" size={25} />
        <TextInput  onChangeText={(txt) => setMessage(txt)} placeholder='message' className={ `flex-1 px-2  rounded-full h-8`} />
      </View>
      <TouchableOpacity  style={{backgroundColor : Colors.goldColor}} className={ `flex justify-center h-10 w-10 bg-[${Colors.goldColor}] ml-2 rounded-full`} >
        <Icon type='font-awesome' name='paper-plane' color="white" size={20} />
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default HumanChatRoom