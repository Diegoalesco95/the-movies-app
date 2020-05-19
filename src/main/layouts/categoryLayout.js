import React from 'react';
import {Header} from '../components/Header';
import {Close} from '../components/Close';
import Categories from '../containers/Categories';

import {connect} from 'react-redux';

const CategoryLayout = ({navigation, route}) => {
  const handleClose = () => {
    navigation.goBack();
  };

  navigation.setOptions({
    header: () => {
      return (
        <Header>
          <Close onPress={() => handleClose()} />
        </Header>
      );
    },
  });

  return <Categories navigation={navigation} route={route} />;
};

export default connect(null)(CategoryLayout);
