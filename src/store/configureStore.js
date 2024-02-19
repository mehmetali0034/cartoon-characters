import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from './favSlice';

export default configureStore({
    reducer: {
      favorites: favoritesReducer,
    },
  });