import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const loadStoragedUser = async () => {
      const storagedToken = await AsyncStorage.getItem("@TrabExpo:auth");

      if (storagedToken) setToken(storagedToken);
    };

    loadStoragedUser();
  });

  const login = async (username, password) => {
    return new Promise((resolve, reject) => {
      api
        .post("usuarios/auth", {
          login: username,
          senha: password,
        })
        .then(async (response) => {
          console.log(response.data);
          await AsyncStorage.setItem("@TrabExpo:auth", response.token);
          setToken(response.token);

          resolve(response);
        })
        .catch((error) => reject(error));
    });
  };

  return (
    <AuthContext.Provider value={{ login, token }}>
      {children}
    </AuthContext.Provider>
  );
};
