import { createSlice } from '@reduxjs/toolkit';

const selectedFoodsSlice = createSlice({
  name: 'selectedFoods',
  initialState: {
    checkedInput: [],
  },
  reducers: {
    setSelectedFood(state, { payload }) {
      state.checkedInput = payload;
    },
  },
});

export const { setSelectedFood } = selectedFoodsSlice.actions;

export default selectedFoodsSlice.reducer;
