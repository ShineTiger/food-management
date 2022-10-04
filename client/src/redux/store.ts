import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import dateSlice from './slice/dateSlice';
import foodNameSlice from './slice/foodNameSlice';
import loginUserSlice from './slice/loginUserSlice';
import selectedFoodsSlice from './slice/seletedFoodSlice';
// ...
const store = configureStore({
  reducer: {
    foodNames: foodNameSlice,
    dateInfo: dateSlice,
    selectedFoods: selectedFoodsSlice,
    loginUserInfo: loginUserSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
