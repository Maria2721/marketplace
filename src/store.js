import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import * as api from "./config";

import { productsReducer } from "./features/products/products-slice";
import { categoriesReducer } from "./features/categories/categories-slice";
import { searchReducer } from "./features/search/search-slice";
import { categoryReducer } from "./features/category/category-slice";
import { cartReducer } from "./features/cart/cart-slice";

const rootReducer = combineReducers({
	products: productsReducer,
	categories: categoriesReducer,
	search: searchReducer,
	category: categoryReducer,
	cart: cartReducer,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart", "categories"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
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

export const persistor = persistStore(store);
