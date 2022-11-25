import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Button, TextInput, Text, useTheme } from "react-native-paper";
import { Alert } from "react-native-web";

import { AuthContext } from "../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const theme = useTheme();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const handleSubmitLoginForm = (user, password) => {
    if (user == "" || password == "") {
      alert("Preencha usuário e senha para fazer login");
    } else if (user !== "" && password.length < 6) {
      alert("A senha deve conter pelo menos 6 caracteres");
    } else {
      setIsLoading(true);
      login(user, password)
        .catch((error) => console.log(error.message))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: "center",
        backgroundColor: theme.colors.surface,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flex: 1,
          paddingVertical: 32,
        }}
      >
        <View style={{ marginTop: "auto", marginBottom: 16 }}>
          <Text
            variant="headlineLarge"
            style={{
              textAlign: "center",
              color: theme.colors.onPrimaryContainer,
            }}
          >
            Faça login
          </Text>
        </View>
        <View>
          <TextInput
            value={username}
            mode="outlined"
            label="Usuário"
            placeholder="Seu nome de usuário"
            onChangeText={setUsername}
          />
          <TextInput
            secureTextEntry={hidePassword}
            value={password}
            mode="outlined"
            label="Senha"
            placeholder="Senha de 6 ou mais dígitos"
            right={
              <TextInput.Icon
                icon={hidePassword ? "eye" : "eye-off"}
                onPress={() => {
                  setHidePassword(!hidePassword);
                }}
              />
            }
            onChangeText={setPassword}
          />
          <Button
            mode="contained"
            onPress={() => handleSubmitLoginForm(username, password)}
            disabled={isLoading}
            style={{ marginVertical: 16 }}
          >
            Login
          </Button>
          <Button mode="text">Esqueci minha senha</Button>
        </View>
        <View
          style={{
            marginVertical: 24,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 10,
              height: 1,
              backgroundColor: theme.colors.surfaceVariant,
              flex: 1,
            }}
          ></View>
          <Text
            style={{
              color: theme.colors.onSurfaceVariant,
              marginHorizontal: 8,
            }}
          >
            ou
          </Text>
          <View
            style={{
              width: 10,
              height: 1,
              backgroundColor: theme.colors.surfaceVariant,
              flex: 1,
            }}
          ></View>
        </View>
        <View style={{ marginTop: 16 }}>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate("Register")}
          >
            Crie sua conta
          </Button>
        </View>
      </View>
    </View>
  );
}
