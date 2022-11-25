import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../views/HomeScreen';
import AllSessions from '../views/AllSessions';

const Tab = createBottomTabNavigator();

function TabStack() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >  
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="AllSessions" component={AllSessions} />        
      </Tab.Navigator>
    );
  }

  export default TabStack;
