import React from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';
import {ControlLayout} from '../ControlLayout';
import {PlayPause} from '../PlayPause';
import {styles} from './styles';

export const VideoComponent = ({
  media,
  loader,
  onBuffer,
  onLoad,
  loading,
  paused,
  playPause,
}) => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: `${media}`,
        }}
        style={styles.video}
        resizeMode="contain"
        onBuffer={onBuffer}
        onLoad={onLoad}
        paused={paused}
      />
      <View style={styles.overlay}>{loading && loader}</View>
      <ControlLayout>
        <PlayPause onPress={playPause} paused={paused} />
      </ControlLayout>
    </View>
  );
};
