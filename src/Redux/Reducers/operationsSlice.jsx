import { createSlice } from "@reduxjs/toolkit";
import data from "data.json";

const initialState = {
  products: data,
  cart: [],
};

const operationsSlice = createSlice({
  name: "operations",
  initialState,
  reducers: {
    addToCart(state, action) {
      const isItemInCart = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const itemsIndexInCart = isItemInCart;
      console.log(itemsIndexInCart);
      if (isItemInCart === -1) {
        action.payload = { ...action.payload, quantity: 1 };
        state.cart = [...state.cart, action.payload];
      } else {
        state.cart[itemsIndexInCart].quantity =
          state.cart[itemsIndexInCart].quantity + 1;
      }
    },
    increaseQuantity(state, action) {
      const itemsIndexInCart = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[itemsIndexInCart].quantity =
        state.cart[itemsIndexInCart].quantity + 1;
    },
    decreaseQuantity(state, action) {
      const itemsIndexInCart = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[itemsIndexInCart].quantity =
        state.cart[itemsIndexInCart].quantity - 1;
    },
    removeItemFromCart(state, action) {
          state.cart=state.cart.filter(item=>item.id!==action.payload.id);
    },
  },
});
export const { addToCart, decreaseQuantity, increaseQuantity, removeItemFromCart } =
  operationsSlice.actions;
export default operationsSlice.reducer;
