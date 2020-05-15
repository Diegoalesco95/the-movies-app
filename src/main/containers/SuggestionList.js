import React from 'react';
import {FlatList} from 'react-native';
import {ListComponent} from '../components/List';
import {Empty} from '../components/Empty';
import {Separator} from '../components/Separator';
import {Movie} from '../components/Movie';
import {connect} from 'react-redux';

import {setMovie} from '../../providers/actions/index';

const SuggestionList = ({list, setMovie}) => {
  const KeyExtractor = item => {
    return item.id.toString();
  };
  const movieHandler = item => {
    setMovie(item);
  };
  return (
    <ListComponent title="Recomendado para ti">
      <FlatList
        data={list}
        keyExtractor={KeyExtractor}
        ListEmptyComponent={() => <Empty text="No hay sugerencias ☹" />}
        ItemSeparatorComponent={() => <Separator direction="vertical" />}
        renderItem={({item}) => (
          <Movie {...item} onPress={() => movieHandler(item)} />
        )}
      />
    </ListComponent>
  );
};

const mapStateToProps = state => {
  return {
    list: state.suggestionList,
  };
};

const mapDispatchToProps = {
  setMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuggestionList);
