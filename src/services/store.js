import { configureStore } from '@reduxjs/toolkit';
import { blogPostApi } from '../slices/blogPostSlice';
import counterReducer from '../slices/counterSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [blogPostApi.reducerPath]: blogPostApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogPostApi.middleware),
});

setupListeners(store.dispatch);
