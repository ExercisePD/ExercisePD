import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "./src/component/Login";
import RegisterScreen from './src/component/formulario';  
import HomeScreen from './src/component/menu';
import NotificationsScreen from './src/component/Notificacion';
import DisabilitiesScreen from './src/component/Discapacidad';
import RoutineScreen from "./src/component/Rutina";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Menu" component={HomeScreen} />  
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Disabilities" component={DisabilitiesScreen} />
        <Stack.Screen name="Routine" component={RoutineScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}