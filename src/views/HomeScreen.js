import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import styles from "../styles/MainStyle";

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>HomeScreen.</Text>
            <Text>Não possui acesso?</Text>
            <Button
                title="Cadastre-se!"
                onPress={() => navigation.navigate('Register')}/>
            
        </View>
    )
}