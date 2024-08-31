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
    return trucks.filter(truck => {
      return Object.entries(filters).every(([key, value]) => {
        if (value === undefined || value === null) return true; 
        return truck[key] === value; 
      });
    });
  }
);

export default slice.reducer;
