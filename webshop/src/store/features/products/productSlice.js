/* import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productsService";

const initialState = {
    products: [],
    error: null,
    loading: false
}

export const getProduct = createAsyncThunk('product/getSpecific', async (_, thunkAPI) => {
  try {
      return await productService.getSpecificAsync('product', )
  } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
  }
})

export const productSlice = createSlice({
    name: 'Product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(addProduct.pending, (state) => {
            state.loading = true;
          })
          .addCase(addProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.products = [...state.products, action.payload];
          })
          .addCase(addProduct.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
          })


          .addCase(getProducts.pending, (state) => {
            state.loading = true;
          })
          .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.products = action.payload;
          })
          .addCase(getProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
          })
    }
})

export default productSlice.reducer */