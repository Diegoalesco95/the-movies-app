import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import ReduxThunk from 'redux-thunk';
import reducer from '../providers/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['selectedMovie'],
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  {
    categoriesList: {loading: true},
    suggestionList: {loading: true},
  },
  applyMiddleware(ReduxThunk),
);
const persistor = persistStore(store);

export {store, persistor};
