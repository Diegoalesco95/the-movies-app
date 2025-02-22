import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

export const ControlLayout = ({children}) => {
  return <View style={styles.controlOverlay}>{children}</View>;
};
