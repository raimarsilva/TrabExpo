import React, {  useContext, useEffect } from 'react';
import { View, Text,SafeAreaView,StyleSheet, FlatList,Item } from 'react-native';
import {AuthContext} from '../context/AuthContext';

const AllSessions = () => {
    const {getList, data} = useContext(AuthContext);

    useEffect(() => {
        getList()
    }, [])

    
    return(
        <View>
            <Text>{data.id}</Text>
        </View>
    )

}


export default AllSessions;