import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const asyncUpFetch = createAsyncThunk(
  'foodNameSlice/asyncUpFetch',
  async () => {
    const res = (await axios.post('/api/getFoodsAll')).data.message;
    const nameCalorieData = await res.map((el: Food) => {
      const nameCalorie = {
        name: el.name,
        kiloCalories: el.kiloCalories,
      };
      return nameCalorie;
    });
    return nameCalorieData;
  },
);

const foodNameSlice = createSlice({
  name: 'foodNames',
  initialState: {
    value: [],
    status: 'Welcome',
  },
  reducers: {
    setFoodNames(state, action) {
      state.value = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = 'complete';
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = 'fail';
    });
  },
});

export const { setFoodNames } = foodNameSlice.actions;
export { asyncUpFetch };
export default foodNameSlice.reducer;
