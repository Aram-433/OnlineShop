import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductsData = createAsyncThunk(
  "productsData/fetchProductsData",
  async () => {
    let result = await fetch("https://dummyjson.com/products");
    let jsonResult = await result.json();
    return jsonResult.products;
  }
);
