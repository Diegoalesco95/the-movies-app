import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';

export const FullScreen = ({onPress, fullscreen}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      hitSlop={{
        left: 10,
        top: 10,
        bottom: 10,
        right: 10,
      }}>
      {fullscreen ? (
        <Icon name="fullscreen-exit" size={35} color="#f0f5f6" />
      ) : (
        <Icon name="fullscreen" size={35} color="#f0f5f6" />
      )}
    </TouchableOpacity>
  );
};
