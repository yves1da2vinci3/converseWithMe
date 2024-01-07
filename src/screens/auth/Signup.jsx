import { View, Text, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import {hp, wp} from '../../constants/Responsive'
import Colors from '../../constants/Colors'
import InputText from '../../components/InputText'
import PasswordInput from '../../components/PasswordInput'
import { Image } from 'react-native'
import Logo from '../../../assets/Logo.png'
import { Avatar } from '@rneui/base'
import fontsVariants from '../../config/fontsVariants'
const Signup = (props) => {
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
      
      <View className={`relative mt-2 self-center`}>
       <Avatar size={140} rounded source={{ uri : "https://cdn-icons-png.flaticon.com/512/149/149071.png" }} />
            <TouchableOpacity onPress={()=> console.log("first")} className={`h-8 w-8 bg-amber-400 flex justify-center items-center absolute bottom-2 right-2 rounded-full`}>
                <Icon  type='ionicon' name='pencil-outline' color="white" size={20} />
            </TouchableOpacity>
        </View>
      {/* Form */}
      <Text  className="font-semibold text-start mt-2" style={{ fontSize : hp(2.3),fontFamily : fontsVariants.semibold}} >Username </Text>
      <InputText placeholder="enter your userName" />
      <Text  className="font-semibold text-start mt-2" style={{ fontSize : hp(2.3),fontFamily : fontsVariants.semibold}} >Email </Text>
      <InputText />
      <Text  className="font-semibold text-start mt-2" style={{ fontSize : hp(2.3),fontFamily : fontsVariants.semibold}} >Password </Text>
      <PasswordInput />
      <TouchableOpacity onPress={()=> props.navigation.navigate("Signup")} className="rounded-full mt-4  self-center items-center justify-center"  style={{ backgroundColor : Colors.goldColor, height : hp(7) ,width : wp("95%") }} >
                    <Text style={{fontFamily : fontsVariants.black}} className="text-white" >register</Text>
                </TouchableOpacity>
    </View>
  )
}

export default Signup