import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';

import AppLayout from './src/main/layouts/appLayout';
import {Loading} from './src/main/components/Loading';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <AppLayout />
      </PersistGate>
    </Provider>
  );
}
