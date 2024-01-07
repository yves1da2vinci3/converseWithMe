import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Colors from '../constants/Colors'
import { Icon } from '@rneui/base'
import { hp } from '../constants/Responsive'
import { TouchableOpacity } from 'react-native'
import fontsVariants from '../config/fontsVariants'
const me = `${Colors.goldColor}`
const away =  'lightgrey'

const AwayMessageItem = ({message}) => {
  const [translate,setTranslate] = useState(false)
  return (
    <View>

    <View style={[styles.container,
      styles.leftContainer    ]} >

    <View className="flex-row min-h-[40rem]"  >
    <Text className="w-[90%]" style={{color :  'white' ,fontFamily : fontsVariants.regular}}>{message.content}</Text>
    <View className="ml-4">
  <Icon name='headset'type='ionicon'  className="ml-2" size={15} />

    </View>
  </View>
  { translate && <Text className="text-sm" style={{color :  'white',fontSize : hp("1.3") }}>{message.content}</Text> }
  

  </View>
  { !translate && <TouchableOpacity  onPress={()=> setTranslate(true)} className="h-10 items-center px-2 flex-row " >
  <View  className="h-8 w-8 mr-2 rounded-full bg-gray-100 items-center justify-center"  >
                <Icon type='ionicon' name='language' size={15} />
            </View>
    <Text style={{fontFamily : fontsVariants.regular}} >traduire</Text>
  </TouchableOpacity> }
  
  </View>

  )
}

const styles = StyleSheet.create({
  container : {
      padding : 10,
      margin:10,
      minHeight : hp("6%"),
      borderRadius : 10,
      maxWidth : '95%'
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
export default AwayMessageItem