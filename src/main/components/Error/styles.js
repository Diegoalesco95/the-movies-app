import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#912623',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
  container2: {
    width: '95%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  text2: {
    marginHorizontal: 20,
    marginVertical: 30,
    fontSize: 14,
    textAlign: 'center',
    color: '#32495c',
  },
  image: {
    width: 300,
    height: 120,
  },
});
