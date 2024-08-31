import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchAllTrucks = createAsyncThunk(
  'fetchAllTrucks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/campers`);
      // fulfilled
      return response.data.items;
    } catch (error) {
      // rejected
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTruckById = createAsyncThunk(
  'fetchTruckById',
  async (truckId, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${truckId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
