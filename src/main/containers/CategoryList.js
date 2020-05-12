import React from 'react';
import {FlatList} from 'react-native';
import {ListComponent} from '../components/List';
import {Empty} from '../components/Empty';
import {VerticalSeparator} from '../components/VerticalSeparator';
import {Movie} from '../components/Movie';

export const CategoryList = ({list}) => {
  const KeyExtractor = item => {
    return item.id.toString();
  };
  return (
    <ListComponent title="Categorias">
      <FlatList
        horizontal
        data={list}
        keyExtractor={KeyExtractor}
        ListEmptyComponent={() => <Empty text="No hay sugerencias ☹" />}
        ItemSeparatorComponent={() => <VerticalSeparator />}
        renderItem={({item}) => <Movie {...item} />}
      />
    </ListComponent>
  );
};
