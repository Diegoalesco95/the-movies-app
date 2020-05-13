import React, {useState} from 'react';
import {VideoComponent} from '../components/Video';
import {ActivityIndicator} from 'react-native';

export const Player = () => {
  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(true);
  const onBuffer = ({isBuffering}) => {
    setLoading(isBuffering);
  };
  const onLoad = () => {
    setLoading(false);
  };
  const playPause = () => {
    setPaused(!paused);
  };
  return (
    <VideoComponent
      media="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      loader={<ActivityIndicator color="#f0f5f6" />}
      onBuffer={onBuffer}
      onLoad={onLoad}
      loading={loading}
      paused={paused}
      playPause={playPause}
    />
  );
};
