import React, { useContext, useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, Item } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { Appbar } from 'react-native-paper';

const AllSessions = () => {
  const { getList, data } = useContext(AuthContext);

  useEffect(() => {

  }, []);

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => { }} />
      </Appbar.Header>
      <Text>Todas as sessões</Text>
    </View>
  )

}


export default AllSessions;