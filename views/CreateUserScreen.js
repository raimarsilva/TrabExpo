import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../styles/MainStyle';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';

export default function CreateUserScreen({navigation}) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmitHandler = async (event) => {
    console.log(email,password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert("Conta", "Cadastrado com sucesso!");
        const user = userCredential.user;
      })
      .catch((error) => console.log(error));
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Cadastrar novo usuário.</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.textInput}
        value={email}
        placeholder='Digite um nome de usuário'
        onChangeText={setEmail} />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        value={password}
        placeholder='Digite uma senha'
        onChangeText={setPassword} />
      <TouchableOpacity
        style={styles.button}
        onPress={onSubmitHandler}
        ><Text style={styles.buttonText}>Cadastrar</Text></TouchableOpacity>
    </View>
  );
}
