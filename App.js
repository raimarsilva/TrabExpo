import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer, Text } from '@react-navigation/native';
import api from "./services/api";

export default function App() {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeUsernameHandler = (username) => {
    setUsername(username);
    console.log(username);
  };

  const onChangePasswordHandler = (password) => {
    setPassword(password);
    console.log(password);
  };

  const onSubmitHandler = async (event) => {
    console.log(username,password);
    try {
      const response = await api.post('usuarios/criar', {
        login:username,
        senha:password,
        admin:true
      });
      
      if (response.status === 201) {
        Alert.alert('Sucesso!', 'Usuário \"' + response.data.login + '\" cadastrado!');
        console.log(response.data);
        setUsername('');
        setPassword('');
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Erro de serviço.");
    }
  };

  return (
    <NavigationContainer style={styles.container}>
      <Text style={styles.titleText}>Aplicativo do trabalho da disciplina de Mobile.</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.textInput}
        value={username}
        placeholder='login'
        onChangeText={onChangeUsernameHandler} />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        value={password}
        placeholder='senha'
        onChangeText={onChangePasswordHandler} />
      <Button
        style={styles.button}
        title="Acessar"
        onPress={onSubmitHandler}/>
      <Text>Não possui acesso?</Text>
      <Button
        title="Cadastre-se!"
        style={styles.button}/>
        onPress={}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaf',
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
    borderRadius:10,
    fontSize: 24,
    marginVertical:5,
    marginHorizontal:5,
    width:'95%',
    backgroundColor:'#fff'
  },
  button:{
    flexWrap:'wrap',
    borderRadius:10,
    fontSize: 24,
    marginVertical:5,
    marginHorizontal:5,
    marginBottom:50
  }
});
