import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../API/api";
export const fetchProducts = createAsyncThunk("products/fetchProducts", async (prod) => {
  try {
    const response = await api.get(prod);
    return response.data;
  } catch (error) {
    return error;
  }
});
const initialState= {
  products: [],
  loading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchProducts.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      products: action.payload,
    }));
    builder.addCase(
      fetchProducts.rejected,
      (state) =>
        (state = {
          ...state,
          loading: false,
          error: "Error fetching products",
        })
    );
  },
});

export default productsSlice.reducer;
export const selectAllProducts = (state) => state.products;
