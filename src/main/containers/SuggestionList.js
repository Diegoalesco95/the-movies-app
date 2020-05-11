import React from 'react';
import {FlatList, Text} from 'react-native';
import {SuggestionListComponent} from '../components/SuggestionList';

export const SuggestionList = () => {
  const list = [{title: 'Titulo 1', key: '1'}, {title: 'Titulo 2', key: '2'}];
  return (
    <SuggestionListComponent title="Recomendado para ti">
      <FlatList
        data={list}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </SuggestionListComponent>
  );
};
