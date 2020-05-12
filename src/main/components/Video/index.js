import React, {useState} from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';
import {styles} from './styles';

export const VideoComponent = ({media, loader}) => {
  const [loading, setLoading] = useState(true);
  const onBuffer = ({isBuffering}) => {
    setLoading({loading: isBuffering});
    console.log(loading);
  };
  const onLoad = () => {
    setLoading({loading: false});
    console.log(loading);
  };
  return (
    <View style={styles.box}>
      <View style={styles.container}>
        <Video
          source={{
            uri: `${media}`,
          }}
          style={styles.video}
          resizeMode="contain"
          onBuffer={onBuffer}
          onLoad={onLoad}
          // paused={true}
        />
        <View style={styles.overlay}>{loading && loader}</View>
      </View>
    </View>
  );
};
