import { configureStore } from '@reduxjs/toolkit';

import analyticsReducer from './Slices'
import usersReducer from './userSlice';
export const store = configureStore({
  reducer: {
    users:usersReducer,
    analytics: analyticsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
