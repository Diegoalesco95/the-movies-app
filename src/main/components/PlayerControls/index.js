import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

export const PlayerControls = ({
  playing,
  showPreviousAndNext,
  showSkip,
  previousDisabled,
  nextDisabled,
  onPlay,
  onPause,
  skipBackwards,
  skipForwards,
  onNext,
  onPrevious,
  color,
}) => {
  return (
    <View style={styles.wrapper}>
      {showPreviousAndNext && (
        <TouchableOpacity
          style={[
            styles.touchable,
            previousDisabled && styles.touchableDisabled,
          ]}
          onPress={onPrevious}
          disabled={previousDisabled}>
          <Icon name="skip-previous" size={35} color={color} />
        </TouchableOpacity>
      )}

      {showSkip && (
        <TouchableOpacity style={styles.touchable} onPress={skipBackwards}>
          <Icon name="replay-10" size={35} color={color} />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.touchable}
        onPress={playing ? onPause : onPlay}>
        {playing ? (
          <Icon name="pause-circle-outline" size={35} color={color} />
        ) : (
          <Icon name="play-circle-outline" size={35} color={color} />
        )}
      </TouchableOpacity>

      {showSkip && (
        <TouchableOpacity style={styles.touchable} onPress={skipForwards}>
          <Icon name="forward-10" size={35} color={color} />
        </TouchableOpacity>
      )}

      {showPreviousAndNext && (
        <TouchableOpacity
          style={[styles.touchable, nextDisabled && styles.touchableDisabled]}
          onPress={onNext}
          disabled={nextDisabled}>
          <Icon name="skip-next" size={35} color={color} />
        </TouchableOpacity>
      )}
    </View>
  );
};
