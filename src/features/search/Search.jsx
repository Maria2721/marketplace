import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { ReactComponent as SearchIcon } from "../../assets/imgs/search.svg";
import { ReactComponent as ClearIcon } from "../../assets/imgs/clear.svg";

import { useSearch } from "./use-search";
import { setCategory } from "../category/category-slice";
import { loadProducts } from "../products/products-slice";

const SearchInputContainer = styled.label`
	width: 100%;
	height: 28px;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	gap: 8px;

	padding: 4px 8px 4px 4px;
	background-color: var(--colors-white);
	box-shadow: none;
	border-radius: var(--radii);
	border: 0;

	svg {
		width: 20px;
		height: 20px;
		fill: var(--colors-graymain);
	}
`;

const SearchInput = styled.input.attrs({
	type: "search",
	placeholder: "Search...",
})`
	width: 100%;
	border: none;
	outline: none;
	color: var(--colors-graymain);
	background-color: var(--colors-white);

	font-weight: var(--fw-m);
	font-size: var(--fs-m);
	line-height: var(--lh-m);
	letter-spacing: var(--ls-m);
`;

const ClearButton = styled.button`
	width: auto;
	height: auto;

	padding: 0;
	background-color: var(--colors-white);
	box-shadow: none;
	border: 0;
	cursor: pointer;

	svg {
		width: 8px;
		height: 8px;
		fill: var(--colors-graymain);
	}
`;

const SearchButton = styled.button`
	width: 28px;
	height: 28px;

	padding: 4px;
	background-color: var(--colors-white);
	box-shadow: none;
	border-radius: var(--radii);
	border: 0;

	cursor: pointer;

	svg {
		width: 20px;
		height: 20px;
		fill: var(--colors-graymain);
	}
`;

export const Search = ({ searchIsOpen, handleSearchIsOpen }) => {
	const [search, handleSearch, cleanUpSearch] = useSearch();
	const category = useSelector((state) => state.category);
	const errorProducts = useSelector((state) => state.products.error);
	const dispatch = useDispatch();

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
		if (searchIsOpen) {
			clearAllURLParams();
			if (category !== "all" || errorProducts) {
				dispatch(loadProducts());
			}
			if (category !== "all") {
				dispatch(setCategory("all"));
			}
		}
	}, [searchIsOpen, dispatch, category, errorProducts]);

	return (
		<>
			{searchIsOpen ? (
				<SearchInputContainer>
					<SearchIcon />
					<SearchInput onChange={handleSearch} value={search} />
					<ClearButton
						onClick={() => {
							handleSearchIsOpen();
							cleanUpSearch();
						}}
					>
						<ClearIcon />
					</ClearButton>
				</SearchInputContainer>
			) : (
				<SearchButton onClick={handleSearchIsOpen}>
					<SearchIcon />
				</SearchButton>
			)}
		</>
	);
};
