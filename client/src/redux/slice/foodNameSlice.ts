import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const asyncUpFetch = createAsyncThunk(
  'foodNameSlice/asyncUpFetch',
  async () => {
    const res = (await axios.post('/api/getFoodsAll')).data.message;
    const foodNameData = await res.map((el: Food) => {
      return el.name;
    });
    return foodNameData;
  },
);

const foodNameSlice = createSlice({
  name: 'foodNames',
  initialState: {
    value: [],
    status: 'Welcome',
  },
  reducers: {
    setFoodNames(state, { payload }) {
      state.value = payload;
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
