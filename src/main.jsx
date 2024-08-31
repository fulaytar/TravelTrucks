import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import MiniLoader from './components/MiniLoader/MiniLoader.jsx'; // Import the MiniLoader component

const App = lazy(() => import('./components/App/App.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<MiniLoader />}>
          <App />
        </Suspense>
        <Toaster position='top-right' />
      </PersistGate>
    </Provider>
  </StrictMode>
);
