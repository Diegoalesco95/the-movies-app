import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const Close = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.button}>X</Text>
    </TouchableOpacity>
  );
};
