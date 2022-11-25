import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Button } from 'react-native';

import CreateUserScreen from '../views/CreateUserScreen';

import LoginScreen from '../views/LoginScreen';


const AuthStack = () => {

  const Stack = createNativeStackNavigator();

  return (
    
      <Stack.Navigator initialRouteName='Login'
        screenOptions={{headerShown: false,}}>
          <Stack.Screen 
            name='Register'
            component={CreateUserScreen}
            options={{title:'Cadastrar novo usuário'}}/>
          <Stack.Screen 
            name='Login' 
            component={LoginScreen}/>
        </Stack.Navigator>      
    
  );
};



export default AuthStack;