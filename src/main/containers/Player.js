import React from 'react';
import {VideoComponent} from '../components/Video';
import {ActivityIndicator} from 'react-native';

export const Player = () => {
  return (
    <VideoComponent
      media="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      loader={<ActivityIndicator color="#f0f5f6" />}
    />
  );
};
