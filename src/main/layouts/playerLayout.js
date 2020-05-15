import React, {useState, useEffect} from 'react';
import {ScrollView, Animated} from 'react-native';
import {VideoPlayer} from '../screens/VideoPlayer';
import {Header} from '../components/Header';
import {Player} from '../containers/Player';
import {Close} from '../components/Close';
import {Details} from '../components/Details';
import {connect} from 'react-redux';
import {deleteMovie} from '../../providers/actions/index';

const PlayerLayout = ({deleteMovie, movie}) => {
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  });

  const handleClose = () => {
    deleteMovie();
  };
  return (
    <Animated.View style={{flex: 1, opacity: opacity}}>
      <VideoPlayer>
        <ScrollView>
          <Header>
            <Close onPress={() => handleClose()} />
          </Header>
          <Player />
          <Details {...movie} />
        </ScrollView>
      </VideoPlayer>
    </Animated.View>
  );
};

const mapStateToProps = state => {
  return {
    movie: state.selectedMovie,
  };
};

const mapDispatchToProps = {
  deleteMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerLayout);
