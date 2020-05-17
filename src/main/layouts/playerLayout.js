import React, {useState, useEffect} from 'react';
import {ScrollView, Animated} from 'react-native';
import {VideoPlayer} from '../screens/VideoPlayer';
import {Header} from '../components/Header';
import {Player} from '../containers/Player';
import {Close} from '../components/Close';
import {Details} from '../components/Details';
import {connect} from 'react-redux';
import {deleteMovie} from '../../providers/actions/index';
import {Error} from '../components/Error';

const PlayerLayout = ({deleteMovie, movie, errorMsg}) => {
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  });

  const handleClose = () => {
    deleteMovie();
  };

  if (errorMsg) {
    return (
      <Animated.View style={{flex: 1, opacity: opacity}}>
        <VideoPlayer>
          <ScrollView>
            <Header>
              <Close onPress={() => handleClose()} />
            </Header>
            <Error
              errorMsg={
                'Lo siento, la pelicula que esta buscando no se encontró. Por favor intente con otra búsqueda'
              }
            />
          </ScrollView>
        </VideoPlayer>
      </Animated.View>
    );
  }
  return (
    <Animated.View style={{flex: 1, opacity: opacity}}>
      <VideoPlayer>
        <ScrollView>
          <Header>
            <Close onPress={() => handleClose()} />
          </Header>
          <Player />
          <Details {...movie} />
        </ScrollView>
      </VideoPlayer>
    </Animated.View>
  );
};

const mapStateToProps = state => {
  console.log('Este es mi estado', state);
  return {
    movie: state.selectedMovie.movie,
    errorMsg: state.selectedMovie.errorMsg,
  };
};

const mapDispatchToProps = {
  deleteMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerLayout);
