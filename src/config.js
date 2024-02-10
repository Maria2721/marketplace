const BASE_URL = "https://dummyjson.com/products";

export const ALL_PRODUCTS = BASE_URL;

export const ALL_CATEGORIES = BASE_URL + "/categories";

export const searchProducts = (q) => BASE_URL + "/search?q=" + q;

export const filterProductsByCategories = (category) =>
	BASE_URL + "/category/" + category;

export const limitSkipSelectProducts = (limit, skip, select) =>
	BASE_URL + "?limit=" + limit + "&skip=" + skip + "&select=" + select;
