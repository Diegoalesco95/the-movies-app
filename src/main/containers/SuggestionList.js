import React from 'react';
import {FlatList, Text} from 'react-native';
import {SuggestionListComponent} from '../components/SuggestionList';
import {Empty} from '../components/Empty';
import {VerticalSeparator} from '../components/VerticalSeparator';
import {Suggestion} from '../components/Suggestion';

export const SuggestionList = ({list}) => {
  const KeyExtractor = item => {
    return item.id.toString();
  };
  return (
    <SuggestionListComponent title="Recomendado para ti">
      <FlatList
        data={list}
        keyExtractor={KeyExtractor}
        ListEmptyComponent={() => <Empty text="No hay sugerencias ☹" />}
        ItemSeparatorComponent={() => <VerticalSeparator />}
        renderItem={({item}) => <Suggestion {...item} />}
      />
    </SuggestionListComponent>
  );
};
