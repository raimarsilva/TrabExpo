import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import styles from "../styles/MainStyle";

export default function WelcomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.titleText}>Aplicativo do trabalho da disciplina de Mobile.</Text>
            <Text style={styles.plainText}>Não possui acesso?</Text>
            <Button
                title="Cadastre-se!"
                onPress={() => navigation.navigate('Register')}/>
            <Text 
                onPress={() => navigation.navigate('Login')}>Fazer login</Text>
        </View>
    )
}