import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';

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

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  container: {
    padding: 10,
    backgroundColor: '#0e151e',
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
