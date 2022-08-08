import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'searchFoodNames',

  // 초기state 설정
  initialState: {
    searchFoodNameList: [{ name: '바나나', id: 1 }],
  },

  // dispatch
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;
