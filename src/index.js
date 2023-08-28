import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { configurePersistStore } from './redux/reduxPersist';
import { BrowserRouter } from 'react-router-dom';

const { store, persistor } = configurePersistStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
