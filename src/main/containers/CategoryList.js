import React from 'react';
import {FlatList} from 'react-native';
import {ListComponent} from '../components/List';
import {Empty} from '../components/Empty';
import {Separator} from '../components/Separator';
import {Category} from '../components/Category';
import {connect} from 'react-redux';

const CategoryList = ({list}) => {
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
        initialNumToRender={0}
      />
    </ListComponent>
  );
};

const mapStateToProps = state => {
  return {
    list: state.categoriesList,
  };
};

export default connect(mapStateToProps)(CategoryList);
