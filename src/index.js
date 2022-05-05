import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configureStore} >
      <App />
    </Provider>
  </React.StrictMode>
);
