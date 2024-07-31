import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  currentOrder: null,
};

export const ordersSlice = createSlice({
  name: 'ordersSlice',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push({ ...action.payload });
    },
    getOrderById: (state, action) => {
      const currentOrder = state.orders.find(
        (item) => item.id === action.payload
      );

      if (currentOrder) {
        state.currentOrder = { ...currentOrder };
      } else {
        state.currentOrder = null;
      }
    },
  },
});

export const { addOrder, getOrderById } = ordersSlice.actions;

export default ordersSlice.reducer;
