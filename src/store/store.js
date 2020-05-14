import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from '../providers/reducers';

const store = createStore(
  reducer,
  {
    categoriesList: [],
    suggestionList: [],
  },
  applyMiddleware(ReduxThunk),
);

export default store;
