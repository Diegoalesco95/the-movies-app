import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Home} from './src/main/screens/Home';
import {Header} from './src/main/components/Header';
import {SuggestionList} from './src/main/containers/SuggestionList';

export default function App() {
  return (
    <Home>
      <Header>
        <Text style={styles.menu}>Menu</Text>
      </Header>
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <SuggestionList />
    </Home>
  );
}

const styles = StyleSheet.create({
  menu: {
    color: '#f0f5f6',
  },
});
