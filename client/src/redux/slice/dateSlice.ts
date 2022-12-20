import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import startOfDay from 'date-fns/startOfDay';
import addDays from 'date-fns/addDays';

const dateSlice = createSlice({
  name: 'dateInfo',
  initialState: {
    selectedDate: startOfDay(new Date()).getTime(),
  },
  reducers: {
    setSelectedDay(state, { payload }: PayloadAction<number>) {
      state.selectedDate = payload;
    },

    setPrevDate(state) {
      state.selectedDate = addDays(state.selectedDate, -1).getTime();
    },

    setNextDate(state) {
      state.selectedDate = addDays(state.selectedDate, +1).getTime();
    },
  },
});

export const { setSelectedDay, setPrevDate, setNextDate } = dateSlice.actions;

export default dateSlice.reducer;
