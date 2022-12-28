import {combineReducers, configureStore} from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import {setupListeners} from '@reduxjs/toolkit/query';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userData from './slices/userData';
import messages from './slices/messages';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userData', 'messages']
};

const rootReducer = combineReducers({userData, messages});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const preloadedState = {};


export const store = configureStore({
  reducer: persistedReducer,
  preloadedState,
  devTools:__DEV__,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
  // .concat(??.middleware),
});

const persistor = persistStore(store);

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export {persistor};
