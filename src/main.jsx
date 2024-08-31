import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App.jsx';
import './main.css';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <Toaster position='top-right' />
      </PersistGate>
    </Provider>
  </StrictMode>
);
