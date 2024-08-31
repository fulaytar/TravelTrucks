import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectAllTrucks } from './trucksSlice';

const slice = createSlice({
  name: 'filters',
  initialState: {
    filters: {},
  },
  reducers: {
    changeFilter(state, action) {
      state.filters = action.payload;
    },
    resetFilters(state) {
      state.filters = {};
    },
  },
});

export const { changeFilter, resetFilters } = slice.actions;

export const selectFilters = state => state.filters.filters;

export const selectFilteredTrucks = createSelector(
  [selectAllTrucks, selectFilters],
  (trucks, filters) => {
    console.log(trucks, filters, 5435345345345);
    return trucks.filter(truck => {
      // Перевірка кожного фільтра
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true; // якщо значення фільтра false, пропускаємо його
        return truck[key]; // перевіряємо, чи є у вантажівки відповідна властивість
      });
    });
  }
);

export default slice.reducer;
