import React from 'react';
import {FlatList, Text} from 'react-native';

export const SuggestionList = () => {
  const list = [{title: 'Top 10', key: '1'}, {title: 'Originales', key: '2'}];
  return (
    <FlatList data={list} renderItem={({item}) => <Text>{item.title}</Text>} />
  );
};
