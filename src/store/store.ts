import { configureStore } from '@reduxjs/toolkit/react';
import { githubApi } from './github.api';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import githubReducer from './github.slice';

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    github: githubReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
