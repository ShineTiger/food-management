import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const asyncUpFetch = createAsyncThunk(
  'nameCalorieSlice/asyncUpFetch',
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

const nameCalorieSlice = createSlice({
  name: 'nameCalorieData',
  initialState: {
    value: [],
    status: 'Welcome',
  },
  reducers: {
    setNameCalorieData(state, action) {
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

export const { setNameCalorieData } = nameCalorieSlice.actions;
export { asyncUpFetch };
export default nameCalorieSlice.reducer;
