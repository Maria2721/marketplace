import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/imgs/search.svg";

export const Button = styled.button`
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

export const Search = () => {
	return (
		<Button onClick={() => console.log("Open Search!")}>
			<SearchIcon />
		</Button>
	);
};
