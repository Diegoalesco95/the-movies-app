import React from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import {styles} from './styles';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/MoviesApp.png')}
        style={styles.logo}
      />
      <ActivityIndicator />
    </View>
  );
};
