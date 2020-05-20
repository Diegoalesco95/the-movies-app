import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Search from '../components/Search';
import {Header} from '../components/Header';
import {Lucky} from '../components/Lucky';
import {setMovie} from '../../providers/actions/index';
import {connect} from 'react-redux';

const LuckyLayout = ({list, errorMsg, loading, setMovie, navigation}) => {
  const KeyExtractor = item => {
    return item.id.toString();
  };
  const movieHandler = item => {
    setMovie(item);
    navigation.navigate('Player');
  };
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Search />
      </View>

      <Lucky
        keyExtractor={KeyExtractor}
        movieHandler={movieHandler}
        list={list}
        errorMsg={errorMsg}
        loading={loading}
        title="Resultados"
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const mapStateToProps = state => {
  return {
    list: state.searchMovie.movies,
    errorMsg: state.suggestionList.errorMsg,
    loading: state.suggestionList.loading,
  };
};

const mapDispatchToProps = {
  setMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LuckyLayout);
