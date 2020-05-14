import React, {useEffect} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {Home} from './src/main/screens/Home';
import {Header} from './src/main/components/Header';
import CategoryList from './src/main/containers/CategoryList';
import SuggestionList from './src/main/containers/SuggestionList';
import {Player} from './src/main/containers/Player';
import {Provider} from 'react-redux';
import store from './src/store/store';

import {getSuggestion, getMovies} from './src/services/api';
import {GET_CATEGORIES, GET_SUGGESTIONS} from './src/providers/types/index';

export default function App() {
  useEffect(() => {
    (async () => {
      const categories = await getMovies();
      store.dispatch({
        type: GET_CATEGORIES,
        payload: categories,
      });
      const suggestion = await getSuggestion(10);
      store.dispatch({
        type: GET_SUGGESTIONS,
        payload: suggestion,
      });
    })();
  }, []);

  return (
    <Provider store={store}>
      <Home>
        <ScrollView>
          <Header>
            <Text style={styles.menu}>Menu</Text>
          </Header>
          <Player />
          <Text>Buscador</Text>
          <CategoryList />
          <SuggestionList />
        </ScrollView>
      </Home>
    </Provider>
  );
}

const styles = StyleSheet.create({
  menu: {
    color: '#f0f5f6',
  },
});
