import { createSlice } from '@reduxjs/toolkit';

const selectedFoodsSlice = createSlice({
  name: 'selectedFoods',
  initialState: {
    value: [],
  },
  reducers: {
    setSelectedFood: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedFood } = selectedFoodsSlice.actions;

export default selectedFoodsSlice.reducer;
