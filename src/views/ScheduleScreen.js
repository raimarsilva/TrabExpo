import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Card, Title, Paragraph } from 'react-native-paper';
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useEffect, useRef, useState } from 'react';
import apiSuits from '../services/apiSuits';
import styles from '../styles/MainStyle';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

export default function ScheduleScreen({ navigation }) {

    const [resp, setResp] = useState({});
    const [date, setDate] = useState({});

    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        getList();

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
    },[date]);

    const getList = async () => {
        try{
        apiSuits.get('/pautas')
            .then((response) => {
                console.log(response.data);
                setResp(response);
                console.log('resp: ', resp.data);
        })
    } catch (error) {
        alert("Impossível listar.");
      }
    }

    const onSubmitHandler = async (event) => {
        setDate(new Date());
        console.log('Data atual: ', date);
        try {
          const response = await apiSuits.post('/pauta', {
            data:date
          });
          
          if (response.status === 201) {
            Alert.alert('Sucesso!', 'Pauta de \"' + response.data.date + '\" cadastrada!',[{onPress: () => navigation.goBack()}]);
            console.log(response.data);
            await schedulePushNotification();
          } else {
            throw new Error();
          }
        } catch (error) {
          alert("Erro de serviço.");
        }
      };

    return (
        <View style={styles.container}>
            <Card.Title
                title="Pautas Cadastradas"
            />
            <View style={styles.container}>
                <FlatList style={{borderWidth:1, marginBottom:50}}
                    data={resp.data}
                    renderItem={({item}) =>
                    <Card>
                    <Card.Content>
                    <Title>Ordem {item.id}:</Title>
                    <Paragraph>{item.data}</Paragraph>
                    </Card.Content>
            </Card>}></FlatList>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}
                onPress={onSubmitHandler}>
                    <Text style={styles.buttonText}>Cadastrar nova pauta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Pauta confirmada!",
        body: 'Seu processo foi pautado.',
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