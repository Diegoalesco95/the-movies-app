import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

export const Separator = ({color, direction}) => {
  if (direction === 'vertical') {
    return (
      <View
        style={[styles.vertical, {borderTopColor: color ? color : '#a2b4bc'}]}
      />
    );
  }
  return (
    <View
      style={[styles.horizontal, {borderTopColor: color ? color : '#a2b4bc'}]}
    />
  );
};
