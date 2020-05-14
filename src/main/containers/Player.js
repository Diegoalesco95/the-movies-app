import React, {useState, useEffect, createRef} from 'react';
import {StatusBar} from 'react-native';
import {VideoComponent} from '../components/Video';
import Orientation from 'react-native-orientation-locker';

export const Player = () => {
  const videoRef = createRef();
  const [state, setState] = useState({
    fullscreen: false,
    play: false,
    currentTime: 0,
    duration: 0,
    showControls: false,
    loading: true,
  });

  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation);
    return () => {
      Orientation.removeOrientationListener(handleOrientation);
    };
  });

  const handleOrientation = orientation => {
    orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT'
      ? (setState(s => ({
          ...s,
          fullscreen: true,
        })),
        StatusBar.setHidden(true))
      : (setState(s => ({
          ...s,
          fullscreen: false,
        })),
        StatusBar.setHidden(false));
  };

  const handleFullScreen = () => {
    state.fullscreen
      ? Orientation.unlockAllOrientations()
      : Orientation.lockToLandscapeRight();
  };

  const handlePlayPause = () => {
    if (state.play) {
      setState({
        ...state,
        play: false,
        showControls: true,
      });
      return;
    }

    setState({
      ...state,
      play: true,
    });
    setTimeout(
      () =>
        setState(s => ({
          ...s,
          showControls: false,
        })),
      2000,
    );
  };

  const skipBackward = () => {
    videoRef.current.seek(state.currentTime - 10);
    setState({...state, currentTime: state.currentTime - 10});
  };

  const skipForward = () => {
    videoRef.current.seek(state.currentTime + 10);
    setState({...state, currentTime: state.currentTime + 10});
  };

  const onSeek = data => {
    videoRef.current.seek(data.seekTime);
    setState({...state, currentTime: data.seekTime});
  };

  const onLoadEnd = data => {
    setState(s => ({
      ...s,
      duration: data.duration,
      currentTime: data.currentTime,
      loading: false,
      showControls: true,
    }));
  };

  const onProgress = data => {
    setState(s => ({
      ...s,
      currentTime: data.currentTime,
    }));
  };

  const onEnd = () => {
    setState({...state, play: false});
    videoRef.current.seek(0);
  };

  const showControls = () => {
    state.showControls
      ? setState({...state, showControls: false})
      : setState({...state, showControls: true});
  };

  const onBuffer = ({isBuffering}) => {
    setState({...state, loading: isBuffering});
  };

  return (
    <VideoComponent
      media="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      state={state}
      videoRef={videoRef}
      handlePlayPause={handlePlayPause}
      handleFullScreen={handleFullScreen}
      onBuffer={onBuffer}
      onLoadEnd={onLoadEnd}
      skipBackward={skipBackward}
      skipForward={skipForward}
      showControls={showControls}
      onProgress={onProgress}
      onEnd={onEnd}
      onSeek={onSeek}
    />
  );
};
