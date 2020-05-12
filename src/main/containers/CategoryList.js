import React from 'react';
import {FlatList} from 'react-native';
import {ListComponent} from '../components/List';
import {Empty} from '../components/Empty';
import {Separator} from '../components/Separator';
import {Category} from '../components/Category';

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
        ListEmptyComponent={() => <Empty text="No hay categorias ☹" />}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({item}) => <Category {...item} />}
      />
    </ListComponent>
  );
};
