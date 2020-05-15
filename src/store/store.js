import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import ReduxThunk from 'redux-thunk';
import reducer from '../providers/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  {
    categoriesList: [],
    suggestionList: [],
  },
  applyMiddleware(ReduxThunk),
);
const persistor = persistStore(store);

export {store, persistor};
