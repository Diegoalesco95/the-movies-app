import React from 'react';
import {FlatList} from 'react-native';
import {ListComponent} from '../components/List';
import {Empty} from '../components/Empty';
import {Separator} from '../components/Separator';
import {Category} from '../components/Category';
import {connect} from 'react-redux';
import {Error} from '../components/Error';
import {CaterorySkeleton} from '../components/Skeleton';

import {getMoviesForCategoriesList} from '../../providers/actions/index';

const CategoryList = ({
  list,
  errorMsg,
  loading,
  navigation,
  getMoviesForCategoriesList,
}) => {
  const KeyExtractor = item => {
    return item.id.toString();
  };
  const movieHandler = item => {
    getMoviesForCategoriesList(item.genres);
    navigation.navigate('Categories', {title: item.genres});
  };

  if (loading) {
    return (
      <ListComponent title="Categorias" image={true}>
        <CaterorySkeleton />
      </ListComponent>
    );
  }
  if (errorMsg) {
    return (
      <ListComponent title="Categorias" image={true}>
        <Error />
      </ListComponent>
    );
  }
  return (
    <ListComponent title="Categorias" image={true}>
      <FlatList
        horizontal
        data={list}
        keyExtractor={KeyExtractor}
        ListEmptyComponent={() => <Empty text="No hay categorias ☹" />}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({item}) => (
          <Category {...item} onPress={() => movieHandler(item)} />
        )}
      />
    </ListComponent>
  );
};

const mapStateToProps = state => {
  return {
    list: state.categoriesList.categories,
    errorMsg: state.categoriesList.errorMsg,
    loading: state.categoriesList.loading,
  };
};

const mapDispatchToProps = {
  getMoviesForCategoriesList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryList);
