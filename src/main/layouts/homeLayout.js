import React, {useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';

import {Home} from '../screens/Home';
import {Header} from '../components/Header';

import CategoryList from '../containers/CategoryList';
import SuggestionList from '../containers/SuggestionList';

import {connect} from 'react-redux';
import {
  getCategoriesList,
  getSuggestionList,
} from '../../providers/actions/index';
import PlayerLayout from './playerLayout';

const HomeLayout = ({getCategoriesList, getSuggestionList, selectedMovie}) => {
  useEffect(() => {
    getCategoriesList();
    getSuggestionList(20);
  }, [getCategoriesList, getSuggestionList]);

  if (selectedMovie) {
    return <PlayerLayout />;
  }
  return (
    <Home>
      <Header>
        <Text style={styles.menu}>Menu</Text>
      </Header>
      <Text>Buscador</Text>
      <CategoryList />
      <SuggestionList />
    </Home>
  );
};

const styles = StyleSheet.create({
  menu: {
    color: '#f0f5f6',
  },
});

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

const mapDispatchToProps = {
  getCategoriesList,
  getSuggestionList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeLayout);
