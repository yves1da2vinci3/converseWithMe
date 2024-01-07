import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { hp, wp } from './src/constants/Responsive';
import AppNavigator from './AppNavigator';
import { useEffect } from 'react';
import InitConfig from './src/config/initConfig';
import { useFonts } from 'expo-font';

export default function App() {
  useEffect(()=>{
    InitConfig()
  },[])
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-thin': require('./assets/fonts/Inter-Thin.ttf'),
    'Inter-semibold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-extralight': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-extrabold': require('./assets/fonts/Inter-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppNavigator />
  );
}


