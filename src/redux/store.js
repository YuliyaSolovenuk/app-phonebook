 import { persistReducer } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contactsSlice';
import { authReducer } from './auth/authSlice';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token']
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    filter: filterReducer,
    contactList: contactsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

 export const persistor = persistStore(store);
