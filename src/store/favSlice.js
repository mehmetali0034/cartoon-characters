import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      if (state.favorites.length < 10) {
        const existingIndex = state.favorites.findIndex(
          (item) => item.id === action.payload.id
        );
        if (existingIndex === -1) {
          state.favorites.push(action.payload);
        } else {
          console.log("Bu ürün zaten favoride");
        }
      }

      // state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id 
      );debugger
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
