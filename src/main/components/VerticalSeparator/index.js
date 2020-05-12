import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const VerticalSeparator = ({color}) => {
  return (
    <View
      style={[styles.separator, {borderTopColor: color ? color : '#a2b4bc'}]}
    />
  );
};
