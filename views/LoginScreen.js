import { Button, StyleSheet, TextInput, View } from "react-native";

export default function LoginScreen({navigation}) {
    return (
        <View>
            <TextInput
                style={styles.textInput}
                //value={username}
                placeholder='Digite seu nome de usuário'
                //onChangeText={onChangeUsernameHandler}
            />
            <TextInput
                secureTextEntry
                style={styles.textInput}
                //value={password}
                placeholder='Digite sua senha'
                //onChangeText={onChangePasswordHandler}
            />
            <Button
                style={styles.button}
                title="Acessar"
                //onPress={onSubmitHandler}
            />
            <Button title="Voltar"
              onPress={() => navigation.goBack()}></Button>
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
    titleText: {
      fontSize: 24,
      textAlign: 'center',
      marginVertical:5,
      marginHorizontal:5,
      marginBottom:50
    },
    textInput: {
      borderWidth:1,
      placeholderTextColor:'grey',
      borderRadius:4,
      fontSize: 24,
      marginVertical:5,
      marginHorizontal:5,
      width:'95%',
      backgroundColor:'#fff'
    },
    button:{
      flexWrap:'wrap',
      borderRadius:25,
      fontSize: 24,
      marginVertical:5,
      marginHorizontal:5,
      marginBottom:50
    }
  });