import { configureStore } from '@reduxjs/toolkit';
import favoriteTrucksSlice from './favoriteTrucksSlice';
import trucksSlice from './trucksSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import filterTrucksSlice from './filterTrucksSlice';

const favoriteTrucksConfig = {
  key: 'favoriteTrucks',
  storage,
  whitelist: ['favoriteTrucks'],
};

const trucksSliceConfig = {
  key: 'trucks',
  storage,
  whitelist: ['trucks'],
};

const filterConfig = {
  key: 'filters',
  storage,
  whitelist: ['filters'],
};

const pFilterConfig = persistReducer(filterConfig, filterTrucksSlice);

const pFavoriteTrucksConfig = persistReducer(
  favoriteTrucksConfig,
  favoriteTrucksSlice
);
const pTrucksConfig = persistReducer(trucksSliceConfig, trucksSlice);

export const store = configureStore({
  reducer: {
    favoriteTrucks: pFavoriteTrucksConfig,
    trucks: pTrucksConfig,
    filters: pFilterConfig,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
