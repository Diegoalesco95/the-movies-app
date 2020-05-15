import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  trailer: {
    height: 200,
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cover: {
    width: 125,
    height: 190,
  },
  title: {
    color: '#32495c',
    fontSize: 18,
    fontWeight: 'bold',
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    padding: 20,
    backgroundColor: 'white',
  },
  bottom: {
    padding: 20,
    flex: 1,
  },
  description: {
    fontSize: 15,
    lineHeight: 20.5,
    textAlign: 'justify',
    color: '#4c4c4c',
    marginLeft: 10,
    flex: 1,
  },
});
