import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'favoriteTrucks',
  initialState: {
    favoriteTrucks: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteTrucks.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      state.favoriteTrucks = state.favoriteTrucks.filter(
        truck => truck.id !== action.payload.id
      );
    },
  },
});

export const { addFavorite, deleteFavorite } = slice.actions;

export const selectFavoriteTrucks = state =>
  state.favoriteTrucks.favoriteTrucks;

export default slice.reducer;
