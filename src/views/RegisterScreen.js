import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';

import api from '../services/api';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function RegisterScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [cellphone, setCellphone] = useState('');

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    // console.log(expoPushToken);

    notificationListener.current = Notifications.addNotificationReceivedListener(notif => {
      setNotification(notif);
      // console.log(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      // console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const onChangePasswordConfirmHandler = (passwordConfirm) => {
    setPasswordConfirm(passwordConfirm)
  };

  const onSubmitHandler = async (event) => {
    // console.log(username, password);
    try {
      const response = await api.post('usuarios/criar', {
        login: username,
        senha: password,
        admin: true
      });

      if (response.status === 201) {
        Alert.alert('Sucesso!', 'Usuário \"' + response.data.login + '\" cadastrado!', [{ onPress: () => navigation.goBack() }]);
        console.log(response.data);
        setUsername('');
        setPassword('');
        await schedulePushNotification();
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Erro de serviço.");
    }


  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Novo usuário" />
      </Appbar.Header>
      <View style={styles.container}>
        <TextInput
          value={username}
          mode="outlined"
          label="Usuário"
          placeholder="Digite um nome para o usuário"
          style={styles.textInput}
          onChangeText={setUsername}
        />
        <TextInput
          secureTextEntry
          mode="outlined"
          label="Senha"
          style={styles.textInput}
          value={password}
          placeholder='Digite uma senha de 6 ou mais dígitos'
          right={<TextInput.Icon icon="eye" />}
          onChangeText={setPassword} />
        <TextInput
          secureTextEntry
          mode="outlined"
          label="Confirmação de Senha"
          style={styles.textInput}
          value={passwordConfirm}
          placeholder='Repita a senha digitada acima'
          right={<TextInput.Icon icon="eye" />}
          onChangeText={onChangePasswordConfirmHandler} />
        <TextInput
          mode="outlined"
          label="Celular"
          style={styles.textInput}
          value={cellphone}
          placeholder='00000000000'
          onChangeText={setCellphone}/>
        <Button
          mode="contained"
          onPress={onSubmitHandler}
          style={styles.button}>
          Cadastrar
        </Button>
      </View>
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Usuário cadastrado!",
      body: 'O usuário cadastrado está ativo.',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 5 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  }

  return token;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingUp: 24 ,
  },
  textInput: {
  },
  button: {
    marginTop: 8,
    marginHorizontal: 16,
  }
});
