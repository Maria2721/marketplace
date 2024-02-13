import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import * as api from "./config";

import { productsReducer } from "./features/products/products-slice";
import { categoriesReducer } from "./features/categories/categories-slice";
import { searchReducer } from "./features/search/search-slice";
import { categoryReducer } from "./features/category/category-slice";

export const store = configureStore({
	reducer: {
		products: productsReducer,
		categories: categoriesReducer,
		search: searchReducer,
		category: categoryReducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {
					client: axios,
					api,
				},
			},
			serializableCheck: false,
		}),
});
