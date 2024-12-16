import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import formReducer from './formSlice'

const persistConfig = {
    key: 'form',
    storage,
};

const persistedReducer = persistReducer(persistConfig, formReducer);

export const store = configureStore({
    reducer: {
        form: persistedReducer,
    },
});

export const persistor = persistStore(store);
