import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import CreateUserScreen from './views/CreateUserScreen';
import HomeScreen from './views/HomeScreen';
import LoginScreen from './views/LoginScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{headerLeft: () => <Image source={require('./assets/govbr24.png')}/>}}>
          <Stack.Screen name='Home'
            component={HomeScreen}
            options={{title:"Bem vindo!"}}/>
          <Stack.Screen name='Register'
            component={CreateUserScreen}
            options={{title:'Cadastrar novo usuário'}}/>
          <Stack.Screen name='Login'
            component={LoginScreen}/>
          {/* <Stack.Screen name='Processos' component={SuitScreen}/> */}
          {/* <Stack.Screen name='Usuários' component={LawyerScreen}/> */}
        </Stack.Navigator>      
    </NavigationContainer>
  );
};
