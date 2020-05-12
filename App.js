import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Home} from './src/main/screens/Home';
import {Header} from './src/main/components/Header';
import {CategoryList} from './src/main/containers/CategoryList';
import {SuggestionList} from './src/main/containers/SuggestionList';
import Api from './src/services/api';
import Video from 'react-native-video';

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
      <Header>
        <Text style={styles.menu}>Menu</Text>
      </Header>
      <View style={{flex: 1, height: 100}}>
        <Video
          source={{
            uri:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          }}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          resizeMode="contain"
        />
      </View>
      <Text>Buscador</Text>
      <CategoryList list={categories} />
      <SuggestionList list={suggestion} />
    </Home>
  );
}

const styles = StyleSheet.create({
  menu: {
    color: '#f0f5f6',
  },
});
