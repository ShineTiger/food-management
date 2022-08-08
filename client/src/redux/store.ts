import { configureStore } from '@reduxjs/toolkit';
import searchFoodNameSlice from './slices/searchFoodNameSlice';

export default configureStore({
  reducer: { searchFoodNames: searchFoodNameSlice },
});
