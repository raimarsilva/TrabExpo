import { Card, Title, Paragraph, IconButton, Button } from 'react-native-paper';
import { View, StyleSheet } from "react-native";


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Card.Title
        title="Advogados Cadastrados"
      />
      <Card>
        <Card.Content>
          <Title>Advogado: Joao Cesar</Title>
          <Paragraph>OAB: 00000-0</Paragraph>
        </Card.Content>
      </Card>
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