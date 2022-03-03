/* eslint-disable @typescript-eslint/ban-ts-comment */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  REHYDRATE,
  PERSIST,
  REGISTER,
  PURGE,
  PAUSE,
  FLUSH,
} from 'redux-persist/lib/constants';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';
import { actions, reducer, selectors } from './ducks';

export { actions, selectors };

const persistConfig = {
  key: `root`,
  version: 1,
  storage,
};

type State = ReturnType<typeof reducer>;

export const rootReducer = (state: State, action: any) => {
  let nextState = state as State | undefined;

  if (action.type === actions.auth.signOut.type) {
    // How to reset store https://twitter.com/dan_abramov/status/703035591831773184
    nextState = undefined;
  }

  return reducer(nextState, action);
};

const persistedReducer = persistReducer(
  persistConfig,
  // @ts-ignore
  rootReducer,
);

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore[`dispatch`];
