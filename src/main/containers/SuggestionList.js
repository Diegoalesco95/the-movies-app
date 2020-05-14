import React from 'react';
import {FlatList} from 'react-native';
import {ListComponent} from '../components/List';
import {Empty} from '../components/Empty';
import {Separator} from '../components/Separator';
import {Movie} from '../components/Movie';

export const SuggestionList = ({list}) => {
  const KeyExtractor = item => {
    return item.id.toString();
  };
  return (
    <ListComponent title="Recomendado para ti">
      <FlatList
        data={list}
        keyExtractor={KeyExtractor}
        ListEmptyComponent={() => <Empty text="No hay sugerencias ☹" />}
        ItemSeparatorComponent={() => <Separator direction="vertical" />}
        renderItem={({item}) => <Movie {...item} />}
      />
    </ListComponent>
  );
};
