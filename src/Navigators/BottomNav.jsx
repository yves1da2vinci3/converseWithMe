import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import { Icon } from '@rneui/base';
import HomeStack from './Stack/HomeStack';
import ProfileStack from './Stack/ProfileStack';
import LeaderBoardStack from '../screens/Leadboard/LeaderBoard';
import ChatStack from './Stack/ChatStack';
const BottomNav = () => {
    const Tab = createBottomTabNavigator();

  return (
   <Tab.Navigator screenOptions={{ headerShown : false,tabBarActiveTintColor : `${Colors.blackColor}` ,tabBarInactiveTintColor : "lightgrey"}}>

    <Tab.Screen options={{ headerShown : false , tabBarShowLabel : true, tabBarLabel :"Accueil", tabBarIcon: ({ focused }) => (
              
              <View style={{ padding: 4, borderRadius: 8, alignItems: "center" }}>
                  <Icon color={`${ focused ? Colors.goldColor : "lightgrey"}`} name="home" type='ionicon' />

              </View>
              
              )} } name='owner' component={HomeStack} />




<Tab.Screen  options={{ headerShown : false , tabBarLabel :"Communiquer", tabBarShowLabel : true, tabBarIcon: ({ focused }) => (
              
              <View style={{ padding: 4, borderRadius: 8, alignItems: "center" }}>
                  <Icon color={`${ focused ? Colors.goldColor : "lightgrey"}`} name="chatbubble-ellipses" type='ionicon' />
              </View>
              
              )} } name='favourite' component={ChatStack} />


                <Tab.Screen  options={{ headerShown : false , tabBarLabel :"LeaderBoard", tabBarShowLabel : true, tabBarIcon: ({ focused }) => (
              
              <View style={{ padding: 4, borderRadius: 8, alignItems: "center" }}>
                  <Icon color={`${ focused ? Colors.goldColor : "lightgrey"}`} name="stats-chart" type='ionicon' />
              </View>
              
              )} } name='booking' component={LeaderBoardStack} />


 
  

    <Tab.Screen options={{ headerShown : false , tabBarShowLabel : true,tabBarLabel :"profile", tabBarIcon: ({ focused }) => (
              
              <View style={{ padding: 4, borderRadius: 8, alignItems: "center" }}>
                  <Icon color={`${ focused ? Colors.goldColor : "lightgrey"}`} name="person-circle" type='ionicon' />
              </View>
              
              )} } name='profile' component={ProfileStack} />
   </Tab.Navigator>
  )
}

export default BottomNav