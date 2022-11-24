import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import api from '../services/api';

const BASE_URL = 'https://aplicacao7.tst.jus.br/pautaws/rest/pautas'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    
    const getList = async () => {
        setIsLoading(true)
        axios
        .get('https://aplicacao7.tst.jus.br/pautaws/rest/pautas')
        .then((res) => {let info = res;
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
        <AuthContext.Provider value={{  isLoading, getList, data}}>
            {children}
        </AuthContext.Provider>
    );
}