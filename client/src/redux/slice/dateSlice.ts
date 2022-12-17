import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import startOfDay from 'date-fns/startOfDay';
import addDays from 'date-fns/addDays';

const dateSlice = createSlice({
  name: 'dateInfo',
  initialState: {
    todayDate: startOfDay(new Date()).getTime(),
  },
  reducers: {
    setToday(state, { payload }: PayloadAction<number>) {
      state.todayDate = payload;
    },

    setPrevDate(state) {
      state.todayDate = addDays(state.todayDate, -1).getTime();
    },

    setNextDate(state) {
      state.todayDate = addDays(state.todayDate, +1).getTime();
    },
  },
});

export const { setToday, setPrevDate, setNextDate } = dateSlice.actions;

export default dateSlice.reducer;
