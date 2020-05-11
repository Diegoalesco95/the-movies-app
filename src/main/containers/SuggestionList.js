import React from 'react';
import {FlatList, Text} from 'react-native';
import {SuggestionListComponent} from '../components/SuggestionList';
import {Empty} from '../components/Empty';
import {VerticalSeparator} from '../components/VerticalSeparator';

export const SuggestionList = () => {
  // const list = [];
  const list = [
    {title: 'Avengers', key: '1'},
    {title: 'Mortal Kombat', key: '2'},
  ];
  return (
    <SuggestionListComponent title="Recomendado para ti">
      <FlatList
        data={list}
        ListEmptyComponent={() => <Empty text="No hay sugerencias ☹" />}
        ItemSeparatorComponent={() => <VerticalSeparator />}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </SuggestionListComponent>
  );
};
