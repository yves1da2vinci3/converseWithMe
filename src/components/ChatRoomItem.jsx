import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { Image, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import Colors from '../constants/Colors';
import formatDate from '../utils/formatDate';
import { TouchableOpacity } from 'react-native';
import fontsVariants from '../config/fontsVariants';
const ChatRoomItem = ({chatRoom}) => {
const navigation = useNavigation()
  const onPress = () =>{
    navigation.navigate('humanchatRoom',{id : chatRoom.id})
  }
  const user = chatRoom.users[1]
  return (
    <TouchableOpacity  activeOpacity={0.7} onPress={onPress} style={styles.container}>
   <Image source={{uri :user.imageUri}} style={styles.image} />
   <View style={styles.badgeContainer}>
     <Text style={styles.badgeText}>4</Text>
      </View>
   <View style={styles.rightContainer}>   
     <View style={styles.row}>
       <Text style={styles.name}>{chatRoom.users[0].name}</Text>
       <Text style={styles.text}> { formatDate(chatRoom.lastMessage.createdAt) }</Text>
     </View>
     <Text  numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
   </View>
   </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
   
    container : {
    flexDirection : 'row',
    padding : 10
    },
    image :{
      width: 50,
      height: 50,
      borderRadius : 30,
      marginRight: 10
    },
    text : {
      color : 'gray'  ,
      fontSize : 18,
      marginBottom : 4,
      fontFamily : fontsVariants.regular
    },
    row :{
      flexDirection : 'row',
      justifyContent : 'space-between'
    },
    name :{
    fontWeight : 'bold',
    marginLeft : 8,
    fontFamily : fontsVariants.bold
    },
    rightContainer :{
      flex : 1
    },
    badgeContainer : {
      backgroundColor : `${Colors.goldColor}`,
      width: 20,
      height : 20,
      borderRadius : 20,
      justifyContent : 'center',
      alignItems :'center',
      position :'absolute',
      borderWidth: 1,
      borderColor :'white',
  
      top: 10,
      left: 45
    },
    badgeText : {
      color : 'white',
      fontSize: 10,
      fontFamily : fontsVariants.regular
    }
  })

export default ChatRoomItem