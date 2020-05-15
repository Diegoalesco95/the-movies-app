import React, {useState} from 'react';
import {View} from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import {Kohana} from 'react-native-textinput-effects';
import {styles} from './styles';
import {connect} from 'react-redux';
import {getSearchMovie} from '../../../providers/actions/index';

const Search = ({getSearchMovie}) => {
  const [text, setText] = useState('');
  const handleSubmit = () => {
    getSearchMovie(text);
  };

  const handleChangeText = text => {
    setText(text);
  };
  return (
    <View style={styles.container}>
      <Kohana
        autoCorrect={false}
        autoCapitalize="none"
        onSubmitEditing={handleSubmit}
        onChangeText={handleChangeText}
        style={{backgroundColor: '#f0f5f6'}}
        label={'Busca tu pelicula favorita'}
        iconClass={MaterialsIcon}
        iconName={'search'}
        iconColor={'#32495c'}
        inputPadding={5}
        labelStyle={{color: '#a2b4bc'}}
        inputStyle={{color: '#32495c'}}
        labelContainerStyle={{padding: 10}}
        iconContainerStyle={{padding: 10}}
        useNativeDriver
      />
    </View>
  );
};

const mapDispatchToProps = {
  getSearchMovie,
};

export default connect(
  null,
  mapDispatchToProps,
)(Search);
