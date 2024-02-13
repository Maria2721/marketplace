import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadProducts = createAsyncThunk(
	"@@products/load-products",
	(_, { extra: { client, api } }) => {
		return client.get(api.ALL_PRODUCTS);
	}
);

export const loadProductsByCategory = createAsyncThunk(
	"@@products/load-products-by-category",
	(category, { extra: { client, api } }) => {
		return client.get(api.productsByCategory(category));
	}
);

export const loadProductsBySearch = createAsyncThunk(
	"@@products/load-products-by-search",
	(search, { extra: { client, api } }) => {
		return client.get(api.searchProducts(search));
	}
);

export const loadProductsWithParam = createAsyncThunk(
	"@@products/load-products-with-param",
	({ limit, skip, select }, { extra: { client, api } }) => {
		return client.get(api.limitSkipSelectProducts(limit, skip, select));
	}
);

const initialState = {
	status: "idle",
	error: null,
	list: [],
};

const setLoading = (state) => {
	state.status = "loading";
	state.error = null;
};

const setError = (state, action) => {
	state.status = "rejected";
	state.error = action.payload || action.meta.error;
};

const setData = (state, action) => {
	state.status = "received";
	state.list = action.payload.data.products;
};

const productsSlice = createSlice({
	name: "@@products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadProducts.pending, setLoading)
			.addCase(loadProducts.rejected, setError)
			.addCase(loadProducts.fulfilled, setData)
			.addCase(loadProductsByCategory.pending, setLoading)
			.addCase(loadProductsByCategory.rejected, setError)
			.addCase(loadProductsByCategory.fulfilled, setData)
			.addCase(loadProductsBySearch.pending, setLoading)
			.addCase(loadProductsBySearch.rejected, setError)
			.addCase(loadProductsBySearch.fulfilled, setData);
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
