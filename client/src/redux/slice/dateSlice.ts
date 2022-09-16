import { createSlice } from '@reduxjs/toolkit';
import startOfDay from 'date-fns/startOfDay';

const dateSlice = createSlice({
  name: 'dateInfo',
  initialState: {
    todayDate: startOfDay(new Date()),
  },
  reducers: {
    setToday(state, { payload }) {
      state.todayDate = payload;
    },
  },
});

export const { setToday } = dateSlice.actions;

export default dateSlice.reducer;
