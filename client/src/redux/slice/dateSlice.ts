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

    buttonAction(state, { payload }: PayloadAction<'prev' | 'next'>) {
      if (payload === 'next') {
        state.todayDate = addDays(state.todayDate, 1);
      } else {
        state.todayDate = addDays(state.todayDate, -1);
      }
    },
  },
});

export const { setToday, buttonAction } = dateSlice.actions;

export default dateSlice.reducer;
