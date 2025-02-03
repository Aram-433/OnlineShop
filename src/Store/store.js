import { configureStore } from "@reduxjs/toolkit";
import { productsDataReducer } from "./slices/ProductDataSlice/productDataSlice";
import { inputValueReducer } from "./slices/InputValue/inputValue";
import { cartOpenSliceReducer } from "./slices/CartOpen/cartOpenSlice";
import { cartDataReducer } from "./slices/CartData/cartDataSlice";

export const store = configureStore({
  reducer: {
    productsData: productsDataReducer,
    inputValue: inputValueReducer,
    cartOpen: cartOpenSliceReducer,
    cartData: cartDataReducer,
  },
});
