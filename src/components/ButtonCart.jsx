import styled from "styled-components";
import { ReactComponent as Cart } from "../assets/imgs/cart.svg";

export const Button = styled.button`
	width: 67px;
	height: 28px;

	padding: 6px 8px 6px 6px;
	background-color: var(--colors-white);
	box-shadow: none;
	border-radius: var(--radii);
	border: 0;

	display: flex;
	align-items: center;
	gap: 4px;

	color: var(--colors-bluelight);
	cursor: pointer;

	svg {
		width: 20px;
		height: 20px;
		fill: var(--colors-bluelight);
	}

	span {
		font-weight: var(--fw-m);
		font-size: var(--fs-m);
		line-height: var(--lh-m);
		letter-spacing: var(--ls-m);
	}
`;

export const ButtonCart = () => {
	return (
		<Button onClick={() => console.log("Open Cart!")}>
			<Cart />
			<span>cart</span>
		</Button>
	);
};
