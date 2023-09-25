import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { hp, wp } from '../constants/Responsive'
import { Icon } from '@rneui/base'

const PasswordInput = ({placeholder}) => {
  return (
    <View style={{backgroundColor : Colors.greyColor,height : hp(7)}} className="flex-row mt-2  border-gray-500 rounded-full items-center px-2 pr-6   border-2" >
    <TextInput  className=" p-2 pl-8 flex-1 font-semibold rounded-full  items-center justify-center" 
     style={{ backgroundColor : Colors.greyColor  ,width : wp("95%") }}
     placeholder={placeholder?placeholder :'enter your password'}
     />
     <Icon name='eye' type='ionicon' />
     </View>
    
  )
}

export default PasswordInput