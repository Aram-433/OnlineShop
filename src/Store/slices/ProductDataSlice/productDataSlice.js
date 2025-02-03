import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsData } from "./API";

const productsDataSlice = createSlice({
  name: "productsData",
  initialState: {
    isLoading: false,
    data: [],
    filtredData: [],
    error: false,
  },
  extraReducers: (bulder) => {
    bulder
      .addCase(fetchProductsData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.filtredData = action.payload;
      })
      .addCase(fetchProductsData.rejected, (state) => {
        state.error = true;
      });
  },
  reducers: {
    searchByBrand(state, action) {
      if (action.payload == "All") {
        return { ...state, filtredData: state.data.map((elm) => elm) };
      } else {
        return {
          ...state,
          filtredData: state.data.filter((elm) => elm.brand == action.payload),
        };
      }
    },
    searchByCategory(state, action) {
      return {
        ...state,
        filtredData: state.data.filter((elm) => elm.category == action.payload),
      };
    },
    searchByInput(state, action) {
      if (action.payload.toUpperCase() == "ALL") {
        return { ...state, filtredData: state.data.filter((elm) => elm) };
      } else {
        return {
          ...state,
          filtredData: state.data.filter((elm) =>
            elm.title.includes(action.payload)
          ),
        };
      }
    },
  },
});

export const productsDataReducer = productsDataSlice.reducer;
export const selectProductsData = (state) => state.productsData;
export const { searchByBrand, searchByCategory, searchByInput } =
  productsDataSlice.actions;
