import { createSlice } from "@reduxjs/toolkit";

const cartOpenSlice = createSlice({
  name: "cartOpen",
  initialState: false,
  reducers: {
    forCart(state, action) {
      return !state;
    },
  },
});

export const cartOpenSliceReducer = cartOpenSlice.reducer;
export const selectCartOpenSlice = (state) => state.cartOpen;
export const { forCart } = cartOpenSlice.actions;
