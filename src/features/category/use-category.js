import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setCategory } from "./category-slice";
import { loadProductsByCategory } from "../products/products-slice";

export const useCategory = () => {
	const dispatch = useDispatch();
	const category = useSelector((state) => state.category);
	const [searchParams, setSearchParams] = useSearchParams();

	const handleCategory = (e) => {
		if (e.target.value !== "all") {
			setSearchParams({ category: e.target.value });
		} else {
			searchParams.delete("category");
			setSearchParams(searchParams);
		}
		dispatch(setCategory(e.target.value));
		dispatch(loadProductsByCategory(e.target.value));
	};

	return [category, handleCategory];
};
