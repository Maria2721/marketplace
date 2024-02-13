import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
	name: "@@search",
	initialState: "",
	reducers: {
		setSearch: (_, action) => action.payload,
		clearSearch: () => "",
	},
});

export const { setSearch, clearSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
