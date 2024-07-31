import { createSlice } from '@reduxjs/toolkit';
import { transformUnique } from '../../utils/uniqueIdElements';

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    decrement: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      if (state.cartItems[index]?.count === 1 || state.cartItems.length === 1) {
        state.cartItems.splice(index, 1);
        return;
      }

      if (index !== -1) {
        state.cartItems[index].count -= 1;
      }
    },
    increment: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.cartItems[index].count += 1;
      }
    },
    addToCart: (state, action) => {
      state.cartItems = transformUnique(state.cartItems, action.payload);
    },
    deleteFromCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
    resetCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { decrement, increment, addToCart, deleteFromCart, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;
