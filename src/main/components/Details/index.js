import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

export const Details = ({medium_cover_image, title, description_full}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.details}>
          <Image style={styles.cover} source={{uri: medium_cover_image}} />
          <Text style={styles.description}>{description_full}</Text>
        </View>
      </View>
    </View>
  );
};
