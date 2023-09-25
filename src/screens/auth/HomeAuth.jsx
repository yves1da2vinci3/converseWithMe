import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import homeAuthImage from '../../../assets/homeAuth.png'
import { Image } from 'react-native'
import { hp, wp } from '../../constants/Responsive'
import Colors from '../../constants/Colors'
const HomeAuth = (props) => {
  return (
    <View className="flex-1  bg-white justify-center flex p-2 pt-10" >
      <Image className="self-center" style={{ height : hp("50%"),width : wp("90%") }} source={ homeAuthImage}  />
      {/* Text */}
      <View className="flex-row justify-start" >
        <Text  className="font-semibold" style={{ fontSize : hp(3)}} >ConverseWith</Text>
        <Text  className="font-semibold" style={{ color : Colors.goldColor, fontSize : hp(3)}} >Me</Text>
      </View>
      <Text  className="font-semibold text-start" style={{ fontSize : hp(2.3)}} >l'application pour discuter ici et ailleurs </Text>
      <Text  className="font-medium mt-3 text-start text-gray-400" style={{ fontSize : hp(1.3)}} >orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </Text>

            <View className="h-auto gap-y-2 mt-3 items-center "  >
                <TouchableOpacity onPress={()=> props.navigation.navigate("login")} className="rounded-full items-center justify-center"  style={{ backgroundColor : Colors.goldColor, height : hp(7) ,width : wp("90%") }} >
                    <Text className="text-white" >Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> props.navigation.navigate("register")} className="rounded-full  border-2 items-center justify-center"  style={{ backgroundColor :"white", height : hp(7) ,width : wp("90%") }} >
                    <Text className="text-black" >register</Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}

export default HomeAuth