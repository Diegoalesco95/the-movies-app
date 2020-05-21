import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

export const Error = ({errorMsg}) => {
  if (errorMsg) {
    return (
      <View style={styles.container2}>
        <Image
          source={require('../../../assets/not-found.png')}
          style={styles.image}
        />
        <Text style={styles.text2}>{errorMsg}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Upps! Parece que se ha presentado un problema.
      </Text>
    </View>
  );
};
