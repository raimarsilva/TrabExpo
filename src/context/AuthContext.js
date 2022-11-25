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
          await AsyncStorage.setItem("@TrabExpo:auth", response.data.token);
          setToken(response.data.token);

          resolve(response);
        })
        .catch((error) => reject(error));
    });
  };

  const logout = async () => {
    await AsyncStorage.removeItem("@TrabalhoExpo:auth");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ login, token, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
