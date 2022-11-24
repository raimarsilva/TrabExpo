import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";

export default function HomeScreen({navigation}){
    return(
        <View>
            <StatusBar style="auto" />
            <Text>Aplicativo do trabalho da disciplina de Mobile.</Text>
            <Text>Não possui acesso?</Text>
            <Button
                title="Cadastre-se!"
                onPress={() => navigation.navigate('Register')}/>
            <Text
                onPress={() => navigation.navigate('Login')}>Fazer login</Text>
        </View>
    )
}