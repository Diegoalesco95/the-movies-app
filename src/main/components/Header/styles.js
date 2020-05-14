import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  container: {
    padding: 10,
    backgroundColor: '#0e151e',
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
