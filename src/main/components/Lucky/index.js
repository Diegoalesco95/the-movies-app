import React from 'react';
import {FlatList, Text} from 'react-native';
import {ListComponent} from '../List';
import {Error} from '../Error';
import {Empty} from '../Empty';
import {Separator} from '../Separator';
import {Movie} from '../Movie';
import {SuggestionSkeleton} from '../Skeleton';

export const Lucky = ({
  title,
  list,
  errorMsg,
  loading,
  keyExtractor,
  movieHandler,
}) => {
  if (loading) {
    return (
      <ListComponent title={title}>
        <SuggestionSkeleton />
      </ListComponent>
    );
  }
  if (errorMsg) {
    return (
      <ListComponent title={title}>
        <Error />
      </ListComponent>
    );
  }
  return (
    <ListComponent title={title}>
      <FlatList
        data={list}
        keyExtractor={keyExtractor}
        ListEmptyComponent={() => <Empty text={`No hay ${title} ☹`} />}
        ItemSeparatorComponent={() => <Separator direction="vertical" />}
        renderItem={({item}) => (
          <Movie {...item} onPress={() => movieHandler(item)} />
        )}
      />
    </ListComponent>
  );
};
