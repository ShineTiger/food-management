import { createSlice } from '@reduxjs/toolkit';

const foodNameSlice = createSlice({
  name: 'foodNames',
  initialState: {
    foodNameList: [],
  },
  reducers: {
    setFoodNames(state, { payload }) {
      state.foodNameList = payload;
    },
  },
});

export const { setFoodNames } = foodNameSlice.actions;

export default foodNameSlice.reducer;
