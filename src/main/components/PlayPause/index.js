import React from 'react';
import {
  TouchableHighlight,
  Text,
  // TouchableOpacity,
  // TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './styles';

export const PlayPause = ({onPress, paused}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor="#53658F"
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
      }}>
      <Text style={styles.button}>{paused ? 'Play' : 'Pause'}</Text>
    </TouchableHighlight>
  );
};
