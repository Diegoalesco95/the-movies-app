import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const SuggestionListComponent = ({title, children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};
