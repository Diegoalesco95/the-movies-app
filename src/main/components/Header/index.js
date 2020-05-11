import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {styles} from './styles';

export const Header = ({children}) => {
  return (
    <View>
      <SafeAreaView>
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
