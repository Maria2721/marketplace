import { useSelector, useDispatch } from "react-redux";
import { setSearch, clearSearch } from "./search-slice";
import {
	loadProducts,
	loadProductsBySearch,
	setInputError,
} from "../products/products-slice";

export const useSearch = () => {
	const dispatch = useDispatch();
	const search = useSelector((state) => state.search);

	const handleSearch = (e) => {
		dispatch(setSearch(e.target.value));
		if (e.target.value.length > 3) {
			dispatch(loadProductsBySearch(e.target.value));
		} else if (search.length === 4 && e.target.value.length === 3) {
			dispatch(loadProducts());
		}
	};

	const cleanUpSearch = () => {
		dispatch(clearSearch());
		if (search.length > 3) {
			dispatch(loadProducts());
		}
	};

	return [search, handleSearch, cleanUpSearch];
};
