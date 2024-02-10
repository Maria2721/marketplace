import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	loadProducts,
	selectProductsInfo,
	selectAllProducts,
} from "./products-slice";

export const useProducts = () => {
	const dispatch = useDispatch();
	const { status, error, qty } = useSelector(selectProductsInfo);
	const products = useSelector(selectAllProducts);

	useEffect(() => {
		if (!qty) {
			dispatch(loadProducts());
		}
	}, [qty, dispatch]);

	return [products, { status, error, qty }];
};
