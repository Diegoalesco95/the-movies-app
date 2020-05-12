import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 10,
    marginRight: 5,
    width: 250,
    height: 100,
    borderRadius: 5,
    overflow: 'hidden',
  },
  genre: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f0f5f6',
    textShadowColor: 'rgba(0,0,0,.75)',
    textShadowOffset: {
      width: 4,
      height: 2,
    },
    textShadowRadius: 5,
  },
  cover: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    left: 0,
    width: 250,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
