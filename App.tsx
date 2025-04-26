
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Calculadora from './Calculadora';

export default function App() {
  return <Calculadora />;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
