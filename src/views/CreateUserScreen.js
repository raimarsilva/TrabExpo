import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import api from '../services/api';

export default function CreateUserScreen({navigation}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    <View style={styles.container}>
      <Text style={styles.titleText}>Cadastrar novo usuário.</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.textInput}
        value={username}
        placeholder='Digite um nome de usuário'
        onChangeText={onChangeUsernameHandler} />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        value={password}
        placeholder='Digite uma senha'
        onChangeText={onChangePasswordHandler} />
      <Button
        style={styles.button}
        title="Cadastrar"
        onPress={onSubmitHandler}/>
    </View>
  );
}

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
