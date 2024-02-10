import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCategories = createAsyncThunk(
	"@@categories/load-categories",
	(_, { extra: { client, api } }) => {
		return client.get(api.ALL_CATEGORIES);
	}
);

const initialState = {
	status: "idle",
	error: null,
	list: [],
};

const categoriesSlice = createSlice({
	name: "@@categories",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadCategories.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(loadCategories.rejected, (state, action) => {
				state.status = "rejected";
				state.error = action.payload || action.meta.error;
			})
			.addCase(loadCategories.fulfilled, (state, action) => {
				state.status = "received";
				console.log(action.payload.data);
				state.list = action.payload.data;
			});
	},
});

export const categoriesReducer = categoriesSlice.reducer;

// selectors
export const selectCategoriesInfo = (state) => ({
	status: state.categories.status,
	error: state.categories.error,
	qty: state.categories.list.length,
});

export const selectAllCategories = (state) => state.categories.list;
