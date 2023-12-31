import { View, Text ,StyleSheet} from 'react-native'
import React, { useContext } from 'react'
import Colors from '../constants/Colors'
import fontsVariants from '../config/fontsVariants'
const me = `${Colors.goldColor}`
const away =  'lightgrey'


const MessageItem = ({message}) => {
  
//   const { user } = useContext(AuthContext)
    // const isMe = user.uid === message.senderId ;
   
  return (
    <View style={[styles.container,
        message.isMe ? styles.rightContainer : styles.leftContainer    ]}>
      <Text style={{color : message.isMe ? 'black' : 'white' ,fontFamily : fontsVariants.regular}}>{message.content}</Text>
    </View>
  )

  
}
const styles = StyleSheet.create({
    container : {
        padding : 10,
        margin:10,
        borderRadius : 10,
        maxWidth : '75%'
    },
    text :{
        color : 'white'
    },
    leftContainer :{
     backgroundColor : me,
     marginLeft: 10,
     marginRight : 'auto'
    },
    rightContainer : {
        backgroundColor : away,
        marginLeft: 'auto',
        marginRight : 10
    }
  });
export default MessageItem