import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Store/store';
import { CartProvider } from './Pages/Context/context'
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CartProvider>
        <App />
      </CartProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

