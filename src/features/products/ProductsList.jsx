import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useProducts } from "./use-products";

import { Card } from "../../components/Card";
import { addProduct } from "../cart/cart-slice";

const Products = styled.div`
	width: 100%;
`;

const ProductsWrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 0;
`;

const Text = styled.div`
	width: 100%;
	padding: 18px 14px 18px 14px;
	color: var(--colors-graydark);
	font-weight: var(--fw-xl);
	font-size: var(--fs-xl);
	line-height: var(--lh-xl);
	letter-spacing: var(--ls-xl);
`;

export const ProductsList = () => {
	const [products, { status, error }] = useProducts();
	const search = useSelector((state) => state.search);
	const dispatch = useDispatch();

	return (
		<Products>
			{error && <Text>{error}</Text>}
			{status === "loading" && <Text>Loading...</Text>}
			{status === "received" &&
				(products.length === 0 && search !== "" ? (
					<Text>Ничего не найдено, попробуйте изменить запрос.</Text>
				) : (
					<ProductsWrapper>
						{products.map((item) => (
							<Card
								key={item.title}
								{...item}
								addProductToCart={() =>
									dispatch(
										addProduct(
											item.id,
											item.title,
											item.price,
											item.images[0]
										)
									)
								}
							/>
						))}
					</ProductsWrapper>
				))}
		</Products>
	);
};
