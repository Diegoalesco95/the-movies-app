import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';

export const Suggestion = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.cover}
          source={require('../../../assets/avengers.png')}
        />
        <View style={styles.genre}>
          <Text style={styles.genreText}>Acción</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>Avengers</Text>
        <Text style={styles.year}>2019</Text>
        <Text style={styles.rating}>5 Estrellas</Text>
      </View>
    </View>
  );
};
