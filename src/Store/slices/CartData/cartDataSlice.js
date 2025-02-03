import { createSlice, current } from "@reduxjs/toolkit";

const cartDataSlice = createSlice({
  name: "cartData",
  initialState: {
    cartData: [],
    total: 0,
  },

  reducers: {
    addClickedItem(state, { payload }) {
      let findedElement = state.cartData.find(
        (elm) => elm.title == payload.title
      );

      if (findedElement == undefined) {
        state.cartData.push({ ...payload, count: 1 });
      } else {
        let findIndex = state.cartData.findIndex(
          (elm) => elm.title == payload.title
        );
        state.cartData[findIndex].count += 1;
      }
      state.total = state.cartData
        .reduce((acc, elm) => {
          return (acc += elm.price * elm.count);
        }, 0)
        .toFixed(2);
    },
    addItemPlus(state, { payload }) {
      let findElem = state.cartData.findIndex((elm) => elm.id == payload);
      state.cartData[findElem].count += 1;

      state.total = state.cartData
        .reduce((acc, elm) => {
          return (acc += elm.price * elm.count);
        }, 0)
        .toFixed(2);
    },

    minusItem(state, { payload }) {
      let findElemIndex = state.cartData.findIndex((elm) => elm.id == payload);
      state.cartData[findElemIndex].count -= 1;
      if (state.cartData[findElemIndex].count == 0) {
        state.cartData.splice(findElemIndex, 1);
      }
      state.total = state.cartData
        .reduce((acc, elm) => {
          return (acc += elm.price * elm.count);
        }, 0)
        .toFixed(2);
    },
    orderProducts(state, action) {
      state.cartData.splice(0, state.cartData.length);
      state.total = 0;
    },
  },
});

export const cartDataReducer = cartDataSlice.reducer;
export const selectCartData = (state) => state.cartData;
export const {
  addClickedItem,
  addItemPlus,
  minusItem,
  totalCount,
  orderProducts,
} = cartDataSlice.actions;
