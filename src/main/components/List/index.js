import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from './styles';

const background = '../../../assets/background.png';

export const ListComponent = ({title, children, image}) => {
  if (!image) {
    return (
      <View style={(styles.container, styles.isFlex)}>
        <Text style={styles.title}>{title}</Text>
        {children}
      </View>
    );
  }
  return (
    <ImageBackground source={require(background)} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </ImageBackground>
  );
};
