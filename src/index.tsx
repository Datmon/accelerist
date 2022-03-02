import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import persistStore from 'redux-persist/lib/persistStore';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import { setupStore } from './store';

const store = setupStore();
const persistor = persistStore(store);

const Global = createGlobalStyle`
  *{
    margin: 0;
    paddnig: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Noto-Sans;
    font-size: 14px;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Global />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById(`root`),
);
