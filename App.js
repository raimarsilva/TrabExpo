import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import CreateUserScreen from './views/CreateUserScreen';
import HomeScreen from './views/HomeScreen';
import LoginScreen from './views/LoginScreen';

export default function App() {

  
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Register' component={CreateUserScreen}/>
          <Stack.Screen name='Login' component={LoginScreen}/>
        </Stack.Navigator>      
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical:5,
    marginHorizontal:5,
    marginBottom:50
  },
  textInput: {
    borderWidth:1,
    placeholderTextColor:'grey',
    borderRadius:4,
    fontSize: 24,
    marginVertical:5,
    marginHorizontal:5,
    width:'95%',
    backgroundColor:'#fff'
  },
  button:{
    flexWrap:'wrap',
    borderRadius:25,
    fontSize: 24,
    marginVertical:5,
    marginHorizontal:5,
    marginBottom:50
  }
});
