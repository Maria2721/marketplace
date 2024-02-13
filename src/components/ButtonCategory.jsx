import styled from "styled-components";
import { ReactComponent as Point } from "../assets/imgs/point.svg";

export const Button = styled.button`
	width: fit-content;
	height: 28px;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;
	gap: 4px;

	padding: 6px 8px 6px 6px;
	box-shadow: none;
	border-radius: 0;
	border: 0;

	background-color: var(--colors-white);
	color: var(--colors-graymain);
	cursor: pointer;

	svg {
		width: 6px;
		height: px;
		fill: var(--colors-white);
	}

	font-weight: var(--fw-m);
	font-size: var(--fs-m);
	line-height: var(--lh-m);
	letter-spacing: var(--ls-m);
	white-space: nowrap;
`;

const buttonActiveStyle = {
	backgroundColor: "var(--colors-bluelight)",
	color: "var(--colors-white)",
};

export const ButtonCategory = ({ value, handleCategory, isActive }) => {
	return (
		<Button
			value={value}
			onClick={handleCategory}
			style={isActive ? buttonActiveStyle : null}
		>
			{isActive && <Point />}
			{value}
		</Button>
	);
};
