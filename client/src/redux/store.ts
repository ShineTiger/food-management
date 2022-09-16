import { configureStore } from '@reduxjs/toolkit';
import dateSlice from './slice/dateSlice';
import foodNameSlice from './slice/foodNameSlice';
// ...
const store = configureStore({
  reducer: {
    foodNames: foodNameSlice,
    dateInfo: dateSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
