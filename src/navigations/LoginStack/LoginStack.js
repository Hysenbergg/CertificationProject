import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../../pages/LoginPage/LoginPage';
import FirstPage from '../../pages/FirstPage/FirstPage';
import BaskanPage from '../../pages/BaskanPage/BaskanPage';

const Stack = createNativeStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='FirstPage' component={FirstPage} />
        <Stack.Screen name='LoginPage' component={LoginPage} />
        <Stack.Screen name='BaskanPage' component={BaskanPage} />
    </Stack.Navigator>
  )
}

export default LoginStack;