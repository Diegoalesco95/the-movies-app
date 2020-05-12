import React from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';
import {styles} from './styles';

export const VideoComponent = ({media}) => {
  return (
    <View style={styles.box}>
      <View style={styles.container}>
        <Video
          source={{
            uri: `${media}`,
          }}
          style={styles.video}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};
