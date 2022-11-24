import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles/MainStyle";

export default function SuitScreen({navigation}){

    const [resp, setResp] = useState('');

    useEffect(() => {
        getList();
    },[]);

    const getList = async () => {
        fetch('https://aplicacao7.tst.jus.br/pautaws/rest/processospauta/tst?sessao=405-2022-6-O')
            .then((response) => {
                console.log(response.data);
                setResp(response.data);
        })
    }

    return(
        <View style={styles.container}>
            <Text>Processo:{+ resp.toString()}</Text>
            <Text onPress={() => navigation.navigate('Home')}>Inicio</Text>
        </View>
    )
}