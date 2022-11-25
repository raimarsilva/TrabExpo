import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterScreen from '../views/RegisterScreen';
import LoginScreen from '../views/LoginScreen';


const AuthStack = () => {

  const Stack = createNativeStackNavigator();

  return (

    <Stack.Navigator initialRouteName='Register'
      screenOptions={{ headerShown: false, }}>
      <Stack.Screen
        name='Register'
        component={RegisterScreen}
        options={{ title: 'Cadastrar novo usuário' }} />
      <Stack.Screen
        name='Login'
        component={LoginScreen} />
    </Stack.Navigator>

  );
};



export default AuthStack;