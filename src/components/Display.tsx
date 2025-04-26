import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayText}>{value}</Text>
    </View>
  );
};

export default Display;