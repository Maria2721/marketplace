import styled from "styled-components";
import { ReactComponent as Cart } from "../assets/imgs/cart.svg";

export const Button = styled.button`
	width: 67px;
	height: 28px;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;
	gap: 4px;

	padding: 6px 8px 6px 6px;
	box-shadow: none;
	border-radius: var(--radii);
	border: 0;

	background-color: var(--colors-white);
	color: var(--colors-bluelight);
	cursor: pointer;

	svg {
		width: 20px;
		height: 20px;
		fill: var(--colors-bluelight);
	}

	font-weight: var(--fw-m);
	font-size: var(--fs-m);
	line-height: var(--lh-m);
	letter-spacing: var(--ls-m);
`;

export const ButtonCart = () => {
	return (
		<Button onClick={() => console.log("Open Cart!")}>
			<Cart />
			cart
		</Button>
	);
};
