import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import CreateUserScreen from './views/CreateUserScreen';
import HomeScreen from './views/HomeScreen';
import LoginScreen from './views/LoginScreen';
import SuitScreen from './views/SuitScreen';

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
          <Stack.Screen name='Suits'
            component={SuitScreen}
            options={{title:'Processos'}}/>
          {/* <Stack.Screen name='Usuários' component={LawyerScreen}/> */}
        </Stack.Navigator>      
    </NavigationContainer>
  );
};
