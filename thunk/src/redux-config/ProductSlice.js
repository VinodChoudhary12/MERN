import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
  "ProductSlice/getProduct",
  async () => {
    try {
      let response = await axios.get("https://dummyjson.com/products");

      return response.data.products;
    } catch (err) {
      console.log(err);
    }
  }
);
const slice = createSlice({
  name: "ProductSlice",
  initialState: {
    productList: [],
    isLoading: false,
    error: false,
  },
  reducers: {
    removeProduct: (state, action) => {
      if (window.confirm("Are you sure ?")) {
        let index = action.payload;
        state.productList.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(getProduct.rejected, (state) => {
        state.error = "Oops! something went wrong..";
      });
  },
});

export const { removeProduct } = slice.actions;
export default slice.reducer;
