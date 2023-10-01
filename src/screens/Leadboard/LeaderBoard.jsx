import { View, Text, Platform } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/base'
import {hp, wp} from '../../constants/Responsive'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import Colors from '../../constants/Colors'
import { ScrollView } from 'react-native'
const LeaderBoard = () => {
  const  filters =  [
    {
      id  : 0,
      label : "DAILY"
    },
    {
      id  : 2,
      label : "WEEKLY"
    },
    {
      id  : 3,
      label : "MONTHLY"
    },
  ]

  const rankingUsers = [
    { ranking: 4, firstName: "John", lastName: "Doe" },
    { ranking: 7, firstName: "Alice", lastName: "Smith" },
    { ranking: 2, firstName: "Bob", lastName: "Johnson" },
    { ranking: 6, firstName: "Emily", lastName: "Brown" },
    { ranking: 9, firstName: "David", lastName: "Wilson" },
    { ranking: 5, firstName: "Olivia", lastName: "Jones" },
    { ranking: 3, firstName: "Michael", lastName: "Miller" },
    { ranking: 8, firstName: "Sophia", lastName: "Davis" },
    { ranking: 1, firstName: "James", lastName: "Martinez" },
    { ranking: 10, firstName: "Emma", lastName: "Anderson" },
    { ranking: 12, firstName: "Daniel", lastName: "Garcia" },
    { ranking: 15, firstName: "Ava", lastName: "Hernandez" },
    { ranking: 11, firstName: "Liam", lastName: "Lopez" },
    { ranking: 14, firstName: "Mia", lastName: "Wilson" },
    { ranking: 13, firstName: "Ethan", lastName: "Thomas" },
  ];
  const [selectedId,setSelectedId] = useState(0)
  return (
    <View className="bg-white  p-2 pt-10 flex-1" >
      <View className="flex-row justify-between items-center" >
      <Text className="font-semibold text-lg" >LeaderBoard</Text>

<Icon type='ioncion' name='info' />
      </View>
      {/* Filter  per day */}
      <View  className=" flex-row gap-x-3 justify-center items-center mt-6" style={{ height : hp("8%")}} >
        {filters.map((fi)=> (
          <TouchableOpacity onPress={()=> setSelectedId(fi.id)} key={fi.id} className={`h-10 w-28 ${Platform.OS === "android" ? "border-2 border-gray-100 " : ""  }  shadow-sm ${fi.id === selectedId ? "bg-amber-500" : "bg-white"}  items-center justify-center rounded-full`} >
            <Text className={`${fi.id === selectedId ? "text-white" : "text-black"} font-semibold`} >{fi.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Top 3 ranked */}
      <View  className=" items-center justify-between flex-row" style={{ height : hp("27%")}} >
        {/* 2 RANKD */}
      <View className="" style={{ height : hp("18%"),width : wp("27%") }} >
        <View style={{ height : hp("15%"),width : wp("25%") }} className="  items-center" >
          <View className="flex-1 w-full bg-slate-50 rounded-full border-4 border-red-200 relative " >
            <View className="h-6 w-6 absolute z-30 bg-red-500 -bottom-4 self-center rounded-full items-center justify-center" >
              <Text className="text-white font-bold" >2</Text>
            </View>
          <Image className="flex-1 w-full bg-slate-50 rounded-full" source={{ uri : "https://cdn-icons-png.flaticon.com/512/149/149071.png" }} />
          </View>
          <Text></Text>
        </View>
        <Text className="text-center" >Edwards</Text>

        </View>
        {/* 1 randked */}
        {/* <View style={{ height : hp("25%") ,width : wp("40%") }} className=" bg-yellow-400" ></View> */}
        <View className=" items-center" style={{ height : hp("25%"),width : wp("40%") }} >
        <View style={{ height : hp("20%"),width : wp("35%") }} className="  items-center" >
          <View className="flex-1 w-full bg-slate-50 rounded-full border-4 border-yellow-200 relative " >
            <View className="h-6 w-6 absolute z-30 bg-yellow-500 -bottom-4 self-center rounded-full items-center justify-center" >
              <Text className="text-white font-bold" >1</Text>
            </View>
          <Image className="flex-1 w-full bg-slate-50 rounded-full" source={{ uri : "https://cdn-icons-png.flaticon.com/512/149/149071.png" }} />
          </View>
          <Text></Text>
        </View>
        <Text className="text-center" >Doumbé</Text>

        </View>
        {/* 3  */}
        <View className="" style={{ height : hp("18%"),width : wp("27%") }} >
        <View style={{ height : hp("15%"),width : wp("25%") }} className=" items-center" >
          <View className="flex-1 w-full bg-slate-50 rounded-full border-4 border-green-200 relative " >
            <View className="h-6 w-6 absolute z-30 bg-green-500 -bottom-4 self-center rounded-full items-center justify-center" >
              <Text className="text-white font-bold" >3</Text>
            </View>
          <Image className="flex-1 w-full bg-slate-50 rounded-full" source={{ uri : "https://cdn-icons-png.flaticon.com/512/149/149071.png" }} />
          </View>
          <Text></Text>
        </View>
        <Text className="text-center" >Usman</Text>

        </View>
        
      </View>
      {/* Your Current rank */}
      <View  className=" flex-row rounded-xl bg-amber-500 justify-between px-3 items-center mt-6" style={{ height : hp("7%")}} >
        <Text className="text-white font-semibold" >Your Currently rank</Text>
        <View className="w-16 h-full  items-center justify-between flex-row" >
        <Text className="text-white font-semibold" >234</Text>
        <Icon name='caret-up-circle' type='ionicon'  color="white"  />

        </View>
</View>

{/* Others rankin */}
<ScrollView showsVerticalScrollIndicator={false}>
 {rankingUsers.map((user) => (
  <View key={user.ranking} className=" flex-row rounded-xl  justify-between px-3 items-center mt-6" style={{ height : hp("7%")}} >
  <View className="flex-row items-center" >
  <Image className="w-12 h-12 rounded-full" source={{ uri : "https://cdn-icons-png.flaticon.com/512/149/149071.png" }} />
  <Text className="text-black ml-2 font-semibold" >{user.firstName +" " + user.lastName}</Text>
  </View>
  <View className="w-16 h-full  items-center justify-between flex-row" >
  <Text className="text-black font-semibold" >{user.ranking}</Text>
  <Icon name='caret-up-circle' type='ionicon'  color={Colors.goldColor}  />

  </View>
</View>
 ))}
</ScrollView>

    </View>
  )
}

export default LeaderBoard