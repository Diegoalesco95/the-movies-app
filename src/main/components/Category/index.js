import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const Category = ({genres, cover, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground style={styles.wrapper} source={{uri: cover}}>
        <View style={styles.cover}>
          <Text style={styles.genre}>{genres ? genres : 'No category'}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
