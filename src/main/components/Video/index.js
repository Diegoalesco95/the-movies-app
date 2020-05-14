import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';
import {ControlLayout} from '../ControlLayout';
import {PlayerControls} from '../PlayerControls';
import {FullScreen} from '../Fullscreen';
import {styles} from './styles';
import {ActivityIndicator} from 'react-native';
import {ProgressBar} from '../PregressBar';

export const VideoComponent = ({
  media,
  state,
  videoRef,
  handlePlayPause,
  handleFullScreen,
  onBuffer,
  onLoadEnd,
  skipBackward,
  skipForward,
  showControls,
  onProgress,
  onEnd,
  onSeek,
}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={showControls}>
        <View>
          <Video
            ref={videoRef}
            source={{
              uri: `${media}`,
            }}
            style={state.fullscreen ? styles.fullscreenVideo : styles.video}
            controls={false}
            resizeMode="contain"
            onBuffer={onBuffer}
            onLoad={onLoadEnd}
            onProgress={onProgress}
            onEnd={onEnd}
            paused={!state.play}
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.overlay}>
        {state.loading && <ActivityIndicator color="#f0f5f6" />}
      </View>
      {state.showControls && (
        <ControlLayout>
          <FullScreen
            onPress={handleFullScreen}
            fullscreen={state.fullscreen}
          />
          <PlayerControls
            playing={state.play}
            showPreviousAndNext={false}
            showSkip={true}
            // previousDisabled={}
            // nextDisabled={}
            onPlay={handlePlayPause}
            onPause={handlePlayPause}
            skipBackwards={skipBackward}
            skipForwards={skipForward}
            // onNext={}
            // onPrevious={}
            color={'#f0f5f6'}
          />
          <ProgressBar
            currentTime={state.currentTime}
            duration={state.duration > 0 ? state.duration : 0}
            onSlideStart={handlePlayPause}
            onSlideComplete={handlePlayPause}
            onSlideCapture={onSeek}
          />
        </ControlLayout>
      )}
    </View>
  );
};
