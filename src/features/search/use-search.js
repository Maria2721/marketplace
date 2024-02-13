import { useSelector, useDispatch } from "react-redux";
import { setSearch, clearSearch } from "./search-slice";
import { loadProducts, loadProductsBySearch } from "../products/products-slice";

export const useSearch = () => {
	const dispatch = useDispatch();
	const search = useSelector((state) => state.search);

	const handleSearch = (e) => {
		dispatch(setSearch(e.target.value));
		dispatch(loadProductsBySearch(e.target.value));
	};

	const cleanUpSearch = () => {
		dispatch(clearSearch());
		dispatch(loadProducts());
	};

	return [search, handleSearch, cleanUpSearch];
};
