import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const About = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://static.platzi.com/media/achievements/badge-reactnative-9c23a814-e9c3-4041-afbd-ff8083fbf32f.png',
        }}
        style={styles.logo}
      />
      <Text style={styles.text}>
        MoviesApp es construido como una aplicación para el aprendizaje sobre
        React Native y React Navigation
      </Text>
      <Text style={styles.text}>@Diegoalesco95</Text>
      <Text style={styles.text}>2020</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e151e',
  },
  text: {
    textAlign: 'center',
    marginBottom: 5,
    color: '#f0f5f6',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
});
