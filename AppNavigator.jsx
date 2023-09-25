import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './src/Navigators/Stack/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './src/Navigators/BottomNav';

export default function App() {

 const Stack = createNativeStackNavigator()


  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen options={{headerShown : false }} name='auth' component={AuthStack} /> 
   <Stack.Screen options={{headerShown : false }} name='user' component={BottomNav} /> 
    </Stack.Navigator>
    </NavigationContainer>
  );
}



