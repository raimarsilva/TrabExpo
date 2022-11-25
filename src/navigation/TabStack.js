import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllSessions from '../views/AllSessions';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ScheduleScreen from '../views/ScheduleScreen';
import SuitScreen from '../views/SuitScreen'
import { Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AddStack() {
  return (
    <Stack.Navigator
      initialRouteName='TabStack'
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="SuitScreen" component={SuitScreen} />
    </Stack.Navigator>
  );
}

function TabStack({ navigation }) {

  const {logout} = useContext(AuthContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        //headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Pautas') {
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
      <Tab.Screen name="Pautas" component={ScheduleScreen} options={{headerRight:() => (<Button
      title='Sair'
      onPress={logout}>
      </Button>)}}/>
      <Tab.Screen name="Processos" component={AllSessions} />
    </Tab.Navigator>
  );
}

export default AddStack;
