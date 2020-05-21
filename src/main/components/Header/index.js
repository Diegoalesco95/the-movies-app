import React from 'react';
import {View, Image, SafeAreaView, StatusBar} from 'react-native';
import {styles} from './styles';

export const Header = ({children}) => {
  return (
    <View>
      <StatusBar backgroundColor="#0e151e" />
      <SafeAreaView style={styles.menu}>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/MoviesApp.png')}
            style={styles.logo}
          />
          <View style={styles.right}>{children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
};
