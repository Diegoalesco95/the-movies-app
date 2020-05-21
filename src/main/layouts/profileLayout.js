import React from 'react';

import {connect} from 'react-redux';
import {removeUser} from '../../providers/actions';
import {Profile} from '../components/Profile';

const profileLayout = ({user, isLogin, removeUser, navigation}) => {
  const handleLogout = () => {
    removeUser(false);
    navigation.navigate('Home');
  };

  return <Profile user={user} isLogin={isLogin} handleLogout={handleLogout} />;
};

function mapStateToProps(state) {
  return {
    user: state.user,
    isLogin: state.isLogin,
  };
}

const mapDispatchToProps = {
  removeUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(profileLayout);
