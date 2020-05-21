import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setUser} from '../../providers/actions';
import {Login} from '../components/Login';

const loginLayout = ({navigation, setUser}) => {
  const [text, setText] = useState('');

  const handleChangeText = text => {
    setText(text);
  };
  const handleLogin = () => {
    const token = 'token';
    if (text.length > 0) {
      setUser({token, username: text});
      navigation.navigate('Home');
    }
  };
  return (
    <Login handleChangeText={handleChangeText} handleLogin={handleLogin} />
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  setUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(loginLayout);
