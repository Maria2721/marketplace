import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "./category-slice";
import { loadProductsByCategory } from "../products/products-slice";

export const useCategory = () => {
	const dispatch = useDispatch();
	const category = useSelector((state) => state.category);

	const handleCategory = (e) => {
		dispatch(setCategory(e.target.value));
		dispatch(loadProductsByCategory(e.target.value));
	};

	return [category, handleCategory];
};
