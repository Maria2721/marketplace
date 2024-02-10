import styled from "styled-components";

export const Button = styled.button`
	width: fit-content;
	height: 28px;

	padding: 6px 8px 6px 6px;
	background-color: var(--colors-white);
	box-shadow: none;
	border-radius: 0;
	border: 0;

	color: var(--colors-graymain);
	cursor: pointer;

	font-weight: var(--fw-m);
	font-size: var(--fs-m);
	line-height: var(--lh-m);
	letter-spacing: var(--ls-m);
`;

export const ButtonCategory = ({ category }) => {
	return (
		<Button onClick={() => console.log("Filter Products By Categories!")}>
			{category}
		</Button>
	);
};
