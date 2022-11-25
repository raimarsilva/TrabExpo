import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import styles from "../styles/MainStyle";

import {AuthContext} from '../context/AuthContext';

export default function LoginScreen({navigation}) {

  const {onSubmitHandler, token} = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit(username,password){
    onSubmitHandler(username,password)
  }

    return (
        <View style={styles.container}>
          <Text style={styles.titleText}>Login</Text>
            <TextInput
                style={styles.textInput}
                value={username}
                placeholder='Digite seu nome de usuário'
            />
            <TextInput
                secureTextEntry
                style={styles.textInput}
                value={password}
                placeholder='Digite sua senha'
            />
            <Button
                style={styles.button}
                title="Acessar"
                onPress={onSubmit}
            />
            <Text style={{marginTop:100,fontSize:18}}>Não possui acesso?</Text>
            <Button title="Criar novo acesso"
              onPress={() => navigation.navigate('Register')}></Button>
      </View>
)
}