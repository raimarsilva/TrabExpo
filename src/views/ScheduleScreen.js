import { Card, Title, Paragraph, IconButton, Button } from 'react-native-paper';
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';


export default function ScheduleScreen({ navigation }) {

    const [number, setNumber] = useState('');
    const [rapporteur, setRapporteur] = useState('');
    const [briefing, setBriefing] = useState('');
    const [resp, setResp] = useState({});

    useEffect(() => {
        getList();
    },[]);

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

    return (
        <View style={styles.container}>
            <Card.Title
                title="Pautas Cadastradas"
            />
            <Card>
                <Card.Content>
                <Title>Pauta: 25/11/2022</Title>
                <Paragraph>16h00</Paragraph>
                </Card.Content>
            </Card>
            <View style={styles.container}>
                <TouchableOpacity
                onPress={navigation.navigate('Pautas')}>
                    <Text style={styles.buttonText}>Cadastrar nova pauta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})