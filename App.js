import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {Home} from './src/main/screens/Home';
import {Header} from './src/main/components/Header';
import {CategoryList} from './src/main/containers/CategoryList';
import {SuggestionList} from './src/main/containers/SuggestionList';
import {Player} from './src/main/containers/Player';
import Api from './src/services/api';

export default function App() {
  const [suggestion, setSuggestion] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const suggestion = await Api.getSuggestion(10);
      setSuggestion(suggestion);

      const categories = await Api.getMovies();
      setCategories(categories);
    })();
  }, []);

  return (
    <Home>
      <ScrollView>
        <Header>
          <Text style={styles.menu}>Menu</Text>
        </Header>
        <Player />
        <Text>Buscador</Text>
        <CategoryList list={categories} />
        <SuggestionList list={suggestion} />
      </ScrollView>
    </Home>
  );
}

const styles = StyleSheet.create({
  menu: {
    color: '#f0f5f6',
  },
});
