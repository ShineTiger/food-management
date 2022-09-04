import { configureStore } from '@reduxjs/toolkit';
import foodNameSlice from './slice/foodNameSlice';
// ...
const store = configureStore({
  reducer: {
    foodNames: foodNameSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
