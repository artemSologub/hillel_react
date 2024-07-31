import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/couterSlice';
import ordersReducer from './slices/ordersSlice';

export const store = configureStore({
  reducer: {
    cartSate: cartReducer,
    ordersState: ordersReducer,
  },
});
