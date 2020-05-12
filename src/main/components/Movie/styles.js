import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'cover',
  },
  genre: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#0e151e',
  },
  genreText: {
    color: '#f0f5f6',
    fontSize: 11,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 18,
    color: '#7394a4',
    marginBottom: 10,
  },
  year: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: 11,
    borderRadius: 3,
    alignSelf: 'flex-start',
    overflow: 'hidden',
    color: '#f0f5f6',
    backgroundColor: '#0e151e',
    marginBottom: 10,
  },
  rating: {
    color: '#7394a4',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
