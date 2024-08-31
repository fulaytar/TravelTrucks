import { createSlice } from '@reduxjs/toolkit';
import { fetchAllTrucks, fetchTruckById } from './AsyncThunk';

const slice = createSlice({
  name: 'trucks',
  initialState: {
    trucks: [],
    selectedTruck: null,
    loading: true,
    error: false,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAllTrucks.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAllTrucks.fulfilled, (state, action) => {
        state.loading = false;
        state.trucks = action.payload;
      })
      .addCase(fetchAllTrucks.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(fetchTruckById.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTruckById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedTruck = action.payload;
      })
      .addCase(fetchTruckById.rejected, state => {
        state.error = true;
        state.loading = false;
      }),
});

export const selectSelectedTruck = state => state.trucks.selectedTruck;
export const selectAllTrucks = state => state.trucks.trucks;

export default slice.reducer;
