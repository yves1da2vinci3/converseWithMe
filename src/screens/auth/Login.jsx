import { View, Text, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import {hp, wp} from '../../constants/Responsive'
import Colors from '../../constants/Colors'
import InputText from '../../components/InputText'
import PasswordInput from '../../components/PasswordInput'
import { Image } from 'react-native'
import Logo from '../../../assets/Logo.png'
import fontsVariants from '../../config/fontsVariants'
const Login = (props) => {
  return (
    <View className="flex-1 px-6 pt-10  bg-white" >
      <TouchableOpacity onPress={()=> props.navigation.goBack()} className={`h-12  bg-white w-12 rounded-lg ${Platform.OS === "android" ? "shadow-lg"  : "border-2 border-gray-300" }  shadow-black justify-center items-center`} >
        <Icon type='ionicon' name='chevron-back'  />
      </TouchableOpacity>
      {/* Logo */}
      <View  className=""  style={{height : hp("15%") }} >
        <Image source={Logo} style={{width : wp("45%"),height : hp("15%")}} className="object-contain self-center " />
      </View>
      {/* Text */}
      <Text  className="font-semibold text-start" style={{ fontSize : hp(3.3),fontFamily : fontsVariants.black}} >Login </Text>
      <Text  className="font-medium  text-start text-gray-400" style={{ fontSize : hp(1.6),fontFamily : fontsVariants.semibold}} >Login to continue in the app</Text>
      {/* Form */}
      <Text  className="font-semibold text-start mt-4" style={{ fontSize : hp(2.3),fontFamily : fontsVariants.semibold}} >Email </Text>
      <InputText />
      <Text  className="font-semibold text-start mt-4" style={{ fontSize : hp(2.3),fontFamily : fontsVariants.semibold}} >Password </Text>
      <PasswordInput />
      <TouchableOpacity onPress={()=> props.navigation.navigate("user")} className="rounded-full mt-4  self-center items-center justify-center"  style={{ backgroundColor : Colors.goldColor, height : hp(7) ,width : wp("95%") }} >
                    <Text style={{fontFamily : fontsVariants.black}} className="text-white" >Login</Text>
                </TouchableOpacity>
    </View>
  )
}

export default Login