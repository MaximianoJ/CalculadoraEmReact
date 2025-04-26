import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';
import styles from './src/styles';

const Calculadora = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value: string) => {
    if (value === '=') {
      try {
        const evalResult = eval(input); // Substituir eval por uma solução mais segura no futuro
        setResult(evalResult.toString());
      } catch {
        setResult('Erro');
      }
      setInput('');
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(prev => prev + value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <Display value={input || result} />
      <View style={styles.buttonContainer}>
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '%'].map((label) => (
          <Button key={label} label={label} onPress={() => handleButtonPress(label)} />
        ))}
      </View>
    </View>
  );
};

export default Calculadora;