import { createSlice } from '@reduxjs/toolkit';

const foodNameSlice = createSlice({
  name: 'foodNames',
  initialState: {
    list: [{ id: 1, name: 'banana' }],
  },
  reducers: {
    // state값을 변화할
    setFoodNames(state, { payload }) {
      console.log(payload);
    },
  },
});

export const { setFoodNames } = foodNameSlice.actions;

export default foodNameSlice.reducer;
