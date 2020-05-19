import React, {useEffect} from 'react';
import {Home} from '../screens/Home';
import Search from '../components/Search';
import CategoryList from '../containers/CategoryList';
import SuggestionList from '../containers/SuggestionList';

import {connect} from 'react-redux';
import {
  getCategoriesList,
  getSuggestionList,
} from '../../providers/actions/index';

const HomeLayout = ({getCategoriesList, getSuggestionList, navigation}) => {
  useEffect(() => {
    getCategoriesList();
    getSuggestionList(20);
  }, [getCategoriesList, getSuggestionList]);

  return (
    <Home>
      <Search />
      <CategoryList navigation={navigation} />
      <SuggestionList navigation={navigation} />
    </Home>
  );
};

const mapDispatchToProps = {
  getCategoriesList,
  getSuggestionList,
};

export default connect(
  null,
  mapDispatchToProps,
)(HomeLayout);
