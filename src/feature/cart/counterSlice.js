import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../components/Data";
const initialState = {
  people: data,
  value: 0,
  amount: 10,
};
const url = "https://course-api.com/react-useReducer-cart-project";
export const getCart = createAsyncThunk("carts/getcart", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});
const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      const items = action.payload;
      state.value += items;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.value = state.value.filter((item) => {
        return item.value !== itemId;
      });
    },
    increase: (state, { payload }) => {
      const itemAmount = state.amount.find((item) => item.id === payload.id);
      itemAmount.amount = itemAmount.amount + 1;
    },
  },
  // extraReducers: {
  //   [getCart.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [getCart.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.people = action.payload;
  //   },
  //   [getCart.pending]: (state) => {
  //     state.isLoading = false;
  //   },
  // },
});
export const { increase, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
