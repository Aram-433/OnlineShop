import { createSlice } from "@reduxjs/toolkit";

const inputValueSlice = createSlice({
  name: "inputValue",
  initialState: "",
  reducers: {
    setInputValue(state, action) {
      return action.payload;
    },
    resetInputValue(state, action) {
      return "";
    },
  },
});

export const inputValueReducer = inputValueSlice.reducer;
export const selectInputValue = (state) => state.inputValue;
export const { setInputValue, resetInputValue } = inputValueSlice.actions;
