import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../styles/MainStyle';
import { Text, View } from 'react-native';

export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text>Home screen!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }