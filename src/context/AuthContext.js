import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';


const BASE_URL = 'http://aplicacao7.tst.jus.br/pautaws/rest/pautas'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState('');

    const onSubmitHandler = async (username, password) => {
        console.log(username, password);
        try {
            const response = await api.post('usuarios/auth', {
                login: username,
                senha: password
            });

            if (response.status === 200) {
                //Alert.alert('Sucesso!', 'Usuário \"' + response.data.login + '\" cadastrado!',[{onPress: () => navigation.goBack()}]);
                console.log(response.data);
                console.log(response.token);
                await AsyncStorage.setItem('@TrabExpo:auth', 'true');
                setToken(response.token);
                return response.status;
                //navigation.navigate('Advogados');
            } else {
                throw new Error();
                return response.status;
            }
        } catch (error) {
            alert("usuario");
            return error;
        }
        
    };


    return (
        <AuthContext.Provider value={{ isLoading, onSubmitHandler, token }}>
            {children}
        </AuthContext.Provider>
    );
}