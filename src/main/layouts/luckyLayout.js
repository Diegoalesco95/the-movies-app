import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Search from '../components/Search';

export const Lucky = () => {
  return (
    <View style={styles.container}>
      <Text>🍀</Text>
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
