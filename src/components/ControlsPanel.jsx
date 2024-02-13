import { useState } from "react";
import styled from "styled-components";

import { Search } from "../features/search/Search";
import { Categories } from "../features/categories/Categories";
import { ButtonCart } from "./ButtonCart";

const Wrapper = styled.div`
	height: 64px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	gap: 8px;
	padding: 18px 14px 18px 14px;
`;

export const ControlsPanel = () => {
	const [searchIsOpen, setSearchIsOpen] = useState(false);

	return (
		<Wrapper>
			<Search
				searchIsOpen={searchIsOpen}
				handleSearchIsOpen={() => setSearchIsOpen(!searchIsOpen)}
			/>
			{!searchIsOpen && <Categories />}
			<ButtonCart />
		</Wrapper>
	);
};
