import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
	name: "@@category",
	initialState: "all",
	reducers: {
		setCategory: (_, action) => action.payload,
	},
});

export const { setCategory } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
