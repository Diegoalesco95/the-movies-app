import React from 'react';
import {ScrollView} from 'react-native';
import {VideoPlayer} from '../screens/VideoPlayer';
import {Header} from '../components/Header';
import {Player} from '../containers/Player';
import {Close} from '../components/Close';
import {Details} from '../components/Details';

import {connect} from 'react-redux';
import {deleteMovie} from '../../providers/actions/index';

const PlayerLayout = ({deleteMovie, movie}) => {
  const handleClose = () => {
    deleteMovie();
  };
  return (
    <VideoPlayer>
      <ScrollView>
        <Header>
          <Close onPress={() => handleClose()} />
        </Header>
        <Player />
        <Details {...movie} />
      </ScrollView>
    </VideoPlayer>
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
