import React from 'react';
import {Kohana} from 'react-native-textinput-effects';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const Login = ({handleChangeText, handleLogin}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../../assets/MoviesApp.png')}
        style={styles.logo}
      />
      <View style={styles.form}>
        <Kohana
          spellCheck={false}
          style={styles.input}
          onChangeText={handleChangeText}
          label={'Usuario'}
          iconClass={MaterialsIcon}
          iconName={'perm-identity'}
          iconColor={'#f0f5f6'}
          inputPadding={5}
          labelStyle={{color: '#a2b4bc'}}
          inputStyle={{color: '#f0f5f6'}}
          labelContainerStyle={{padding: 10}}
          iconContainerStyle={{padding: 10}}
          useNativeDriver
        />
        <Kohana
          autoCorrect={false}
          style={styles.input}
          // onChangeText={handleChangeText}
          label={'Contraseña'}
          iconClass={MaterialsIcon}
          iconName={'vpn-key'}
          iconColor={'#f0f5f6'}
          inputPadding={5}
          labelStyle={{color: '#a2b4bc'}}
          inputStyle={{color: '#f0f5f6'}}
          labelContainerStyle={{padding: 10}}
          iconContainerStyle={{padding: 10}}
          secureTextEntry={true}
          useNativeDriver
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonLabel}>Iniciar Sesion</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
