import { Card, Title, Paragraph, IconButton, Button } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";


export default function HomeScreen({ navigation }) {
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