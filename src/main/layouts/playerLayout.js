import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {VideoPlayer} from '../screens/VideoPlayer';
import {Header} from '../components/Header';
import {Player} from '../containers/Player';
import {Close} from '../components/Close';

import {connect} from 'react-redux';
import {deleteMovie} from '../../providers/actions/index';

const PlayerLayout = ({deleteMovie}) => {
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
      </ScrollView>
    </VideoPlayer>
  );
};

const mapDispatchToProps = {
  deleteMovie,
};

export default connect(
  null,
  mapDispatchToProps,
)(PlayerLayout);
