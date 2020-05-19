import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';

export const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Nombre de usuario</Text>
      <Button title="Cerrar sesión" color="#67a52e" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
