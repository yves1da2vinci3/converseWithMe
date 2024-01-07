import { View, Text } from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/base";
import {hp} from '../../constants/Responsive'
import { Calendar ,LocaleConfig} from 'react-native-calendars';
import { ScrollView } from "react-native";
import Colors from "../../constants/Colors";
import { Bar, VictoryBar, VictoryChart, VictoryPie, VictoryTheme } from 'victory-native'
import { TouchableOpacity } from "react-native";
import fontsVariants from '../../config/fontsVariants'
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const navigation = useNavigation()
  const [markedDates,setMarkedDates] = useState({
    "2024-01-01" : {
      color : Colors.goldColor
    }
  })
  const data = [
    { weekday: "lun.", xp: 13000 },
    { weekday: "mar.", xp: 16500 },
    { weekday: "merc.", xp: 14250 },
    { weekday: "jeu.", xp: 19000 },
    { weekday: "ven.", xp: 16500 },
    { weekday: "sam.", xp: 14250 },
    { weekday: "dim.", xp: 19000 }
  ];
  const previousData = [
    { weekday: "lun.", xp: 3000 },
    { weekday: "mar.", xp: 16500 },
    { weekday: "merc.", xp: 14250 },
    { weekday: "jeu.", xp: 9000 },
    { weekday: "ven.", xp: 15500 },
    { weekday: "sam.", xp: 14250 },
    { weekday: "dim.", xp: 29000 }
  ];
  return (
    <ScrollView  showsVerticalScrollIndicator={false} className="bg-white flex-1 px-4 py-10">
      <View className="flex-row justify-between items-center ">
        <Text style={{fontFamily : fontsVariants.semibold}} className="text-gray-400 text-lg">Bienvenue</Text>
        <Icon onPress={()=>navigation.navigate('notification') } type="ionicon" name="notifications-outline" />
      </View>
      <Text  style={{fontFamily : fontsVariants.black}} className="text-black font-semibold text-lg">
        Yves Lionel DIOMANDE
      </Text>

       {/* graph per week */}
       <Text style={{fontFamily : fontsVariants.semibold}} className="text-black mt-10 font-semibold text-lg">
        Rapport hebdomadaire
      </Text>
      <View className=" w-full   rounded-xl" style={{ minHeight : hp('28%')  }} >
      <VictoryChart width={400} theme={VictoryTheme.material}>
          <VictoryBar data={data} style={{ data : { fill : Colors.goldColor } }   } dataComponent={<Bar    />} alignment="middle" x="weekday" y="xp" />
          {/* <VictoryBar data={previousData} style={{ data : { fill : "grey" } }   } dataComponent={<Bar    />} alignment="middle" x="weekday" y="xp" /> */}
        </VictoryChart>
      </View>
      <View className={ `flex self-center mb-15 flex-row  ml-8 items-center`}>
    <View style={{backgroundColor : Colors.goldColor}} className={ `h-4 w-4 bg-[${Colors.goldColor}]`}></View>
    <Text style={{fontFamily : fontsVariants.semibold}} className={ ` font-bold ml-5 `}>Points Xp </Text>

   </View>
     
 {/* graph per Year */}
 <Text style={{fontFamily : fontsVariants.semibold}} className="text-black mt-10  font-semibold text-lg ">
        Rapport Annuel
      </Text>
      <View className="bg-red-100 w-full mb-20 rounded-xl" style={{ minHeight : hp('28%')  }} >
      <Calendar
        markingType={'period'}
        theme={ 
          {
            
          }
        }
        markedDates={{
          '2024-01-01': {
            selected: true,
          customContainerStyle :{
            backgroundColor : Colors.goldColor,
            borderRadius: 25
          }
          },
          '2024-01-03': {
            selected: true,
          customContainerStyle :{
            backgroundColor : Colors.goldColor,
            borderRadius: 25
          }
          },
        }}
        // Customize the calendar as needed
      />
      </View>
     
    </ScrollView>
  );
};

export default Home;
