import styled from "styled-components";
import { useProducts } from "./use-products";

import { Card } from "../../components/Card";

const Wrapper = styled.div`
	width: 100%;

	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 0;
`;

export const ProductsList = () => {
	const [products, { status, error }] = useProducts();

	return (
		<Wrapper>
			{error && <h2>Can't fetch data</h2>}
			{status === "loading" && <h2>Loading...</h2>}

			{status === "received" &&
				products.map((item) => <Card key={item.title} {...item} />)}
		</Wrapper>
	);
};
