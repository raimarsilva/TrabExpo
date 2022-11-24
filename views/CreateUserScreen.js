import Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from '../services/api';
import styles from '../styles/MainStyle';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function CreateUserScreen({navigation}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    console.log(expoPushToken);

    notificationListener.current = Notifications.addNotificationReceivedListener(notif => {
      setNotification(notif);
      console.log(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

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
    
    await schedulePushNotification();
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
      <TouchableOpacity
        style={styles.button}
        onPress={onSubmitHandler}
        ><Text style={styles.buttonText}>Cadastrar</Text></TouchableOpacity>
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
    trigger: { seconds: 3 },
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
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}
