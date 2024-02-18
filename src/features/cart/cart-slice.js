import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "@@cart",
	initialState: [],
	reducers: {
		addProduct: {
			reducer: (state, action) => {
				const id = action.payload.id;
				const elementExists = state.some((item) => item.id === id);

				if (elementExists) {
					const product = state.find((product) => product.id === id);
					product.quantity = ++product.quantity;
				} else {
					state.push(action.payload);
				}
			},
			prepare: (id, title, price, image) => ({
				payload: {
					id,
					title,
					price,
					image,
					quantity: 1,
				},
			}),
		},
		removeProduct: (state, action) => {
			const id = action.payload;
			return state.filter((product) => product.id !== id);
		},
		decrementQuantity: (state, action) => {
			const id = action.payload;
			const product = state.find((product) => product.id === id);

			if (product.quantity === 1) {
				return state.filter((product) => product.id !== id);
			} else if (product.quantity > 1) {
				product.quantity = --product.quantity;
			}
		},
		incrementQuantity: (state, action) => {
			const id = action.payload;
			const product = state.find((product) => product.id === id);
			product.quantity = ++product.quantity;
		},
	},
});

export const {
	addProduct,
	removeProduct,
	decrementQuantity,
	incrementQuantity,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export const selectAllProductsToCart = (state) => state.cart;
export const selectProductToCart = (state, id) =>
	state.cart.find((product) => product.id === id);
