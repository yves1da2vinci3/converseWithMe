import { View, Text, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import {hp, wp} from '../../constants/Responsive'
import Colors from '../../constants/Colors'
import InputText from '../../components/InputText'
import PasswordInput from '../../components/PasswordInput'
import { Image } from 'react-native'
import Logo from '../../../assets/Logo.png'
const Login = (props) => {
  return (
    <View className="flex-1 p-2 pt-10  bg-white" >
      <TouchableOpacity onPress={()=> props.navigation.goBack()} className={`h-12  bg-white w-12 rounded-lg ${Platform.OS === "android" ? "shadow-lg"  : "border-2 border-gray-300" }  shadow-black justify-center items-center`} >
        <Icon type='ionicon' name='chevron-back'  />
      </TouchableOpacity>
      {/* Logo */}
      <View  className=""  style={{height : hp("15%") }} >
        <Image source={Logo} style={{width : wp("95%"),height : hp("15%")}} className="object-contain " />
      </View>
      {/* Text */}
      <Text  className="font-semibold text-start" style={{ fontSize : hp(2.3)}} >Login </Text>
      <Text  className="font-medium  text-start text-gray-400" style={{ fontSize : hp(1.6)}} >Login to continue in the app</Text>
      {/* Form */}
      <Text  className="font-semibold text-start mt-4" style={{ fontSize : hp(2.3)}} >Email </Text>
      <InputText />
      <Text  className="font-semibold text-start mt-4" style={{ fontSize : hp(2.3)}} >Password </Text>
      <PasswordInput />
      <TouchableOpacity onPress={()=> props.navigation.navigate("user")} className="rounded-full mt-4  self-center items-center justify-center"  style={{ backgroundColor : Colors.goldColor, height : hp(7) ,width : wp("95%") }} >
                    <Text className="text-white" >Login</Text>
                </TouchableOpacity>
    </View>
  )
}

export default Login