import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { hp, wp } from '../constants/Responsive'
import fontsVariants from '../config/fontsVariants'

const InputText = ({placeholder}) => {
  return (
    <TextInput  className="rounded-full  border-2 p-2 pl-8 font-semibold mt-2 border-gray-500 items-center justify-center" 
     style={{ backgroundColor : Colors.greyColor, height : hp(7) ,width : wp("90%") ,fontFamily : fontsVariants.semibold}}
     placeholder={placeholder?placeholder :'enter your email'}
     />
    
  )
}

export default InputText