import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadProducts = createAsyncThunk(
  "@@products/load-products",
  (_, { extra: { client, api } }) => {
    return client.get(api.ALL_PRODUCTS);
  }
);

const initialState = {
  status: "idle",
  error: null,
  list: [],
};

const productsSlice = createSlice({
  name: "@@products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.status = "received";
        console.log(action.payload.data);
        state.list = action.payload.data.products;
      });
  },
});

export const productsReducer = productsSlice.reducer;

// selectors
export const selectProductsInfo = (state) => ({
  status: state.products.status,
  error: state.products.error,
  qty: state.products.list.length,
});

export const selectAllProducts = (state) => state.products.list;

export const selectVisibleProducts = (state, { search = "", region = "" }) => {
  return state.products.list.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      country.region.includes(region)
  );
};
