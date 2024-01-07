import { View, Text } from 'react-native'
import React from 'react'
import { hp } from '../../constants/Responsive'
import { Icon } from '@rneui/themed'
import fontsVariants from '../../config/fontsVariants'
import { Image } from '@rneui/base'
import Follow from '../../../assets/add-friend.png'
import Message from '../../../assets/new-email.png'
import Quality from '../../../assets/quality.png'
const Notifications = () => {
  return (
    <View  className="flex-1 bg-white gap-y-2 px-6 pt-5" >

     <View style={{ height : hp('10%') }} className=" border-b-2 border-gray-300 flex-row items-center" >
        <View  style={{ height : hp('8%'),width : hp('8%') }} className="bg-red-100 items-center justify-center rounded-full" >
          <Image style={{ height : hp('5%'),width : hp('5%') }} source={Follow} />
        </View>
        {/* Text */}
        <View className="flex-1  ml-2" >
          <Text style={{ fontFamily : fontsVariants.semibold }} >Soum a commencé a vous suivre</Text>
          <Text style={{ fontFamily : fontsVariants.regular,color : "grey" }} >il y a 5min</Text>
        </View>

        <Icon type='ionicon' color="grey" name='ellipsis-vertical' />
       </View>
     <View style={{ height : hp('10%') }} className=" border-b-2 border-gray-300 flex-row items-center" >
        <View  style={{ height : hp('8%'),width : hp('8%') }} className="bg-yellow-100 items-center justify-center rounded-full" >
          <Image style={{ height : hp('5%'),width : hp('5%') }} source={Message} />
        </View>
        {/* Text */}
        <View className="flex-1  ml-2" >
          <Text style={{ fontFamily : fontsVariants.semibold }} >prisca vous a enovyé un nouveau message </Text>
          <Text style={{ fontFamily : fontsVariants.regular,color : "grey" }} >il y a 25min</Text>
        </View>

        <Icon type='ionicon' color="grey" name='ellipsis-vertical' />
       </View>

     <View style={{ height : hp('10%') }} className=" border-b-2 border-gray-300 flex-row items-center" >
        <View  style={{ height : hp('8%'),width : hp('8%') }} className="bg-blue-100 items-center justify-center rounded-full" >
          <Image style={{ height : hp('5%'),width : hp('5%') }} source={Quality} />
        </View>
        {/* Text */}
        <View className="flex-1  ml-2" >
          <Text style={{ fontFamily : fontsVariants.semibold }} >Vous avez terminé 1er cette semaine </Text>
          <Text style={{ fontFamily : fontsVariants.regular,color : "grey" }} >il y a 1 jour</Text>
        </View>

        <Icon type='ionicon' color="grey" name='ellipsis-vertical' />
       </View>

    </View>
  )
}

export default Notifications