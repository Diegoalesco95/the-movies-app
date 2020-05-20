import React from 'react';
import {Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import {styles} from './styles';

export const Profile = ({user, isLogin, handleLogout}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {user ? `¡Bienvenido ${user.username}!` : 'Por favor inicia sesion'}
      </Text>
      <Text style={styles.text}>
        {user ? 'Espero estes disfrutando una gran experiencia' : ''}
      </Text>
      <Button
        title="Cerrar sesion"
        color="#67a52e"
        onPress={handleLogout}
        disabled={!isLogin}
      />
    </SafeAreaView>
  );
};
