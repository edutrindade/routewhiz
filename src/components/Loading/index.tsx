import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import styles from './styles';
import { theme } from '../../theme';

interface LoadingProps {
  simple?: boolean;
}

export const Loading = ({ simple = false }: LoadingProps) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : '.'));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={theme.colors.backgroundLight} />
      {!simple && <Text style={styles.text}>Carregando{dots}</Text>}
    </View>
  );
};
