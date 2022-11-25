import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack'; 
import TabStack from './TabStack';

import {AuthContext} from '../context/AuthContext';

export default function(){
    const {getList, data} = useContext(AuthContext);
    
    return(
        <NavigationContainer>
            {false ? <TabStack/> : <AuthStack/>}
        </NavigationContainer>
        
    )
}