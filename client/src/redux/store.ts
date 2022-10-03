import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import dateSlice from './slice/dateSlice';
import foodNameSlice from './slice/foodNameSlice';
import selectedFoodsSlice from './slice/seletedFoodSlice';
// ...
const store = configureStore({
  reducer: {
    foodNames: foodNameSlice,
    dateInfo: dateSlice,
    selectedFoods: selectedFoodsSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
