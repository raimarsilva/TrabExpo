import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../views/HomeScreen';
import AllSessions from '../views/AllSessions';
import SuitScreen from '../views/SuitScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function TabStack({navigation}) {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Advogados') {
              iconName = focused
                ? 'ios-people-circle'
                : 'ios-people-circle-outline';
            } else if (route.name === 'Processos') {
              iconName = focused ? 'ios-albums' : 'ios-albums-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#01426A',
          tabBarInactiveTintColor: 'gray',
        })}
      >  
        <Tab.Screen name="Advogados" component={HomeScreen} />
        <Tab.Screen name="Processos" component={AllSessions} />        
      </Tab.Navigator>
    );
  }

  export default TabStack;
