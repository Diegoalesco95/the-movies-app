import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {VideoPlayer} from '../screens/VideoPlayer';
import {Header} from '../components/Header';
import {Player} from '../containers/Player';

export const PlayerLayout = () => {
  return (
    <VideoPlayer>
      <ScrollView>
        <Header>
          <Text style={styles.menu}>Menu</Text>
        </Header>
        <Player />
      </ScrollView>
    </VideoPlayer>
  );
};

const styles = StyleSheet.create({
  menu: {
    color: '#f0f5f6',
  },
});
