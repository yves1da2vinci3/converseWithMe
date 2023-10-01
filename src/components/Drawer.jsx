import { View, Text, Platform } from 'react-native'
import React from 'react'
import { Icon, Overlay } from '@rneui/base'
import { hp, wp } from '../constants/Responsive'
const Drawer = ({children,isOpen,onClose}) => {
  return (
    <Overlay  overlayStyle={{ flex :1 ,backgroundColor : "white",alignSelf : "flex-start" }}   isVisible={isOpen} >
          <View className={`h-full bg-white w-1/2 self-start ${Platform.OS === "ios" ? "mt-6" : ""   } `} style={{ width : wp("70%")}} >
            <View className="flex-row items-center" style={{height : hp("5%")}} >
                {/* Title */}
                <Text style={{ fontSize : hp(3)}} className="flex-1 font-semibold  " >Mots Clés</Text>
                {/* Close Icon */}
                <Icon onPress={()=> onClose(false)} type='ionicon' name='close'  />
            </View>
            <View className="flex-1 mt-2 " >
            {children}
            </View>
            </View>
    </Overlay>
  )
}

export default Drawer