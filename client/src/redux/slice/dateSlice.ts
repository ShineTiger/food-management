import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import startOfDay from 'date-fns/startOfDay';
import addDays from 'date-fns/addDays';

const dateSlice = createSlice({
  name: 'dateInfo',
  initialState: {
    todayDate: startOfDay(new Date()),
  },
  reducers: {
    setToday(state, { payload }: PayloadAction<Date>) {
      state.todayDate = payload;
    },

    setPrevDate(state) {
      state.todayDate = addDays(state.todayDate, -1);
    },

    setNextDate(state) {
      state.todayDate = addDays(state.todayDate, +1);
    },
  },
});

export const { setToday, setPrevDate, setNextDate } = dateSlice.actions;

export default dateSlice.reducer;
