import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';

export const Suggestion = ({
  title,
  genres,
  medium_cover_image: cover_img,
  year,
  rating,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.cover} source={{uri: cover_img}} />
        <View style={styles.genre}>
          <Text style={styles.genreText}>
            {genres ? genres[0] : 'No category'}
          </Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.rating}>Rating: {rating}</Text>
      </View>
    </View>
  );
};
