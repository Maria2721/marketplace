import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
	loadProducts,
	loadProductsByCategory,
	selectProductsInfo,
	selectAllProducts,
	setInputError,
} from "./products-slice";
import { selectAllCategories } from "../categories/categories-slice";
import { setCategory } from "../category/category-slice";

export const useProducts = () => {
	const dispatch = useDispatch();
	const { status, error, qty } = useSelector(selectProductsInfo);
	const products = useSelector(selectAllProducts);
	const categories = useSelector(selectAllCategories);
	const category = useSelector((state) => state.category);
	const search = useSelector((state) => state.search);

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const paramValue = queryParams.get("category");
	//const param = queryParams.toString().split("=")[0];

	const clearAllURLParams = () => {
		const urlParams = new URLSearchParams(window.location.search);
		// Удаляем все параметры
		urlParams.forEach((value, key) => {
			urlParams.set(key, "");
		});
		// Обновляем URL без параметров
		window.history.replaceState(null, "", `${window.location.pathname}`);
	};

	useEffect(() => {
		if (!qty && search === "") {
			if (queryParams.has("category")) {
				// В url есть параметр category
				if (paramValue === category) {
					// Введенная категория уже выбрана, загружаем товары по выбранной категории
					dispatch(loadProductsByCategory(paramValue));
				} else if (categories.includes(paramValue)) {
					// Введенная категория есть в списке категорий, обновляем категорию и загружаем товары по ней
					dispatch(setCategory(paramValue));
					dispatch(loadProductsByCategory(paramValue));
				} else {
					// Введенной категории не существует, выводим информацию об ошибке ввода
					dispatch(setCategory("all"));
					dispatch(
						setInputError(
							"Данной категории не существует, введите или выберите другую категорию товаров!"
						)
					);
				}
			} else {
				// в url нет параметра category
				clearAllURLParams();
				if (category === "all") {
					dispatch(loadProducts());
				} else if (category !== "all") {
					dispatch(loadProductsByCategory(category));
				}
			}
		}
	}, [qty, dispatch, location, category]);

	return [products, { status, error, qty }];
};
