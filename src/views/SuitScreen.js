import { useEffect, useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import apiSuits from "../services/apiSuits";
import styles from "../styles/MainStyle";

export default function SuitScreen({navigation}){

    const [number, setNumber] = useState('');
    const [rapporteur, setRapporteur] = useState('');
    const [briefing, setBriefing] = useState('');
    const [resp, setResp] = useState({});

    useEffect(() => {
        getList();
    },[]);

    const getList = async () => {
        try{
        apiSuits.get('/processos')
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
        console.log(number,rapporteur,briefing);
        try {
          const response = await apiSuits.post('/processo', {
            numero:number,
            relator:rapporteur,
            pauta:null,
            resumo:briefing
          });
          console.log(response.status,response.data);
      
          if (response.status === 201) {
            Alert.alert('Sucesso!', 'Processo \"' + response.data.numero + '\" cadastrado!');
            console.log('response: ', response.data);
            setNumber('');
            setRapporteur('');
            setBriefing('');
            navigation.navigate('Suits');
            
          } else {
            throw new Error();
          }
        } catch (error) {
          alert("Erro de serviço.");
        }
        await schedulePushNotification();
        
      };

    return(
        <View style={styles.container}>
            <View  style={styles.container}>
                <Text>Processos:</Text>
                <FlatList style={{borderWidth:1, marginBottom:50}}
                    data={resp.data}
                    renderItem={({item}) => <Text>Número: {item.numero}</Text>}></FlatList>
            </View>
            <View style={styles.container}>
                <Text>Número</Text>
                <TextInput style={styles.textInput}
                    placeholder='Digite o número do processo.'
                    value={number}
                    onChangeText={setNumber}></TextInput>
                <Text>Relator</Text>
                <TextInput style={styles.textInput}
                    placeholder='Digite o Relator do processo.'
                    value={rapporteur}
                    onChangeText={setRapporteur}></TextInput>
                <Text>Resumo</Text>
                <TextInput style={styles.textInput}
                    placeholder='Digite o resumo do processo.'
                    value={briefing}
                    onChangeText={setBriefing}></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                        onPress={onSubmitHandler}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            <Text onPress={() => navigation.navigate('Home')}>Início</Text>
        </View>
    )
}