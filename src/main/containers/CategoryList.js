import React from 'react';
import {FlatList} from 'react-native';
import {ListComponent} from '../components/List';
import {Empty} from '../components/Empty';
import {Separator} from '../components/Separator';
import {Movie} from '../components/Movie';

export const CategoryList = ({list}) => {
  const KeyExtractor = item => {
    return item.id.toString();
  };
  return (
    <ListComponent title="Categorias" image={true}>
      <FlatList
        horizontal
        data={list}
        keyExtractor={KeyExtractor}
        ListEmptyComponent={() => <Empty text="No hay sugerencias ☹" />}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({item}) => <Movie {...item} />}
      />
    </ListComponent>
  );
};
