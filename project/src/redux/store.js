import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/couterSlice';

export const store = configureStore({
  reducer: {
    cartSate: cartReducer,
  },
});
