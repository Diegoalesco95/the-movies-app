import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const Empty = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
