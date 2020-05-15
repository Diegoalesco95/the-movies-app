import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from './styles';
export const Category = ({genres, medium_cover_image: cover_img}) => {
  return (
    <ImageBackground style={styles.wrapper} source={{uri: cover_img}}>
      <View style={styles.cover}>
        <Text style={styles.genre}>{genres ? genres[0] : 'No category'}</Text>
      </View>
    </ImageBackground>
  );
};
