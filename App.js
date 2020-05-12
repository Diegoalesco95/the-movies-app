import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Home} from './src/main/screens/Home';
import {Header} from './src/main/components/Header';
import {SuggestionList} from './src/main/containers/SuggestionList';
import Api from './src/services/api';

export default function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const movies = await Api.getSuggestion(10);
      setMovies(movies);
    })();
  }, []);

  return (
    <Home>
      <Header>
        <Text style={styles.menu}>Menu</Text>
      </Header>
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <SuggestionList list={movies} />
    </Home>
  );
}

const styles = StyleSheet.create({
  menu: {
    color: '#f0f5f6',
  },
});
