import styled from "styled-components";

import { ProductsList } from "../features/products/ProductsList";

export const Wrapper = styled.div`
	width: 100%;
`;

export const HomePage = () => {
	return (
		<Wrapper>
			<ProductsList />
		</Wrapper>
	);
};
