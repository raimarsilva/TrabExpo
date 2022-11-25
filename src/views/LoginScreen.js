import { View, StyleSheet } from "react-native";
import { Appbar, Button, TextInput } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header
        mode="center-aligned">
        <Appbar.Content title="Autenticação" />
      </Appbar.Header>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <TextInput
            //value={username}
            mode="outlined"
            label="Usuário"
            placeholder="Seu nome de usuário"
            style={styles.textInput}
          //onChangeText={onChangeUsernameHandler}
          />
          <TextInput
            secureTextEntry
            //value={password}
            mode="outlined"
            label='Senha'
            placeholder='Senha de 6 ou mais dígitos'
            right={<TextInput.Icon icon="eye" />}
            style={styles.textInput}
          //onChangeText={onChangePasswordHandler}
          />
          <Button
            mode="contained"
          //onPress={onSubmitHandler}
          style={styles.button}>
            Login
          </Button>
          <Button
            mode="text"
          //onPress={onSubmitHandler}
            style={styles.button}>
            Esqueci minha senha
          </Button>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('Register')}
            style={styles.button}>
            Cadastrar  
          </Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 64,
  },
  textInput: {
  },
  button: {
    marginTop: 8,
    marginHorizontal: 16,
  }
});
