import React, {useEffect} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';

import {Home} from '../screens/Home';
import {Header} from '../components/Header';
import {Player} from '../containers/Player';
import CategoryList from '../containers/CategoryList';
import SuggestionList from '../containers/SuggestionList';

import {connect} from 'react-redux';
import {
  getCategoriesList,
  getSuggestionList,
} from '../../providers/actions/index';

const AppLayout = ({getCategoriesList, getSuggestionList}) => {
  useEffect(() => {
    getCategoriesList();
    getSuggestionList(20);
  }, [getCategoriesList, getSuggestionList]);

  return (
    <Home>
      <ScrollView>
        <Header>
          <Text style={styles.menu}>Menu</Text>
        </Header>
        <Player />
        <Text>Buscador</Text>
        <CategoryList />
        <SuggestionList />
      </ScrollView>
    </Home>
  );
};

const styles = StyleSheet.create({
  menu: {
    color: '#f0f5f6',
  },
});

const mapDispatchToProps = {
  getCategoriesList,
  getSuggestionList,
};

export default connect(
  null,
  mapDispatchToProps,
)(AppLayout);
