import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import api from '../services/api';

const BASE_URL = 'http://aplicacao7.tst.jus.br/pautaws/rest/pautas'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState('');

    const onSubmitHandler = async (username,password) => {
    console.log(username,password);
    try {
      const response = await api.post('usuarios/auth', {
        login:username,
        senha:password
      });
      
      if (response.status === 200) {
        //Alert.alert('Sucesso!', 'Usuário \"' + response.data.login + '\" cadastrado!',[{onPress: () => navigation.goBack()}]);
        console.log(response.data);
        console.log(response.token);
        setToken(response.token);
        //navigation.navigate('Advogados');
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Erro de serviço.");
    }
  };
    
    const getList = async () => {
        setIsLoading(true)
        await axios
        .get('http://192.168.0.96//aplicacao7.tst.jus.br/pautaws/rest/pautas')
        .then((response) => {
            let info = response[0];
            console.log(info)
            setData(info);
            setIsLoading(false);
        })
        .catch(error => {
        console.log(`register error ${error}`);
        console.log(JSON.stringify(error))
        setIsLoading(false);
      });
        
    }        
        

    return (
        <AuthContext.Provider value={{isLoading, onSubmitHandler, token}}>
            {children}
        </AuthContext.Provider>
    );
}