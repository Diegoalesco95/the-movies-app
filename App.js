import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';

import HomeLayout from './src/main/layouts/homeLayout';
import {Loading} from './src/main/components/Loading';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <HomeLayout />
      </PersistGate>
    </Provider>
  );
}
