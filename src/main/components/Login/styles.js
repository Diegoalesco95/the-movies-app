import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7394a4',
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  form: {
    width: 350,
    height: 180,
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#32495c',
    color: 'white',
  },
  button: {
    backgroundColor: '#99c84a',
    borderRadius: 5,
  },
  buttonLabel: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
