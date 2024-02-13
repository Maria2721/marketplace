import styled from "styled-components";

import { useCategories } from "./use-categories";
import { useCategory } from "../category/use-category";
import { ButtonCategory } from "../../components/ButtonCategory";

const Wrapper = styled.div`
	width: 100%;
	height: 28px;

	border-radius: var(--radii);
	border: 0;

	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	gap: 1px;
	overflow: auto;
	white-space: nowrap;
`;

export const Categories = () => {
	const [categories, { status, error }] = useCategories();
	const [category, handleCategory] = useCategory();

	return (
		<Wrapper>
			{error && <h2>Can't fetch data</h2>}
			{status === "loading" && <h2>Loading...</h2>}

			{status === "received" && (
				<>
					<ButtonCategory
						key="all"
						value="all"
						handleCategory={handleCategory}
						isActive={category === "all"}
					></ButtonCategory>
					{categories.map((item) => {
						return (
							<ButtonCategory
								key={item}
								value={item}
								handleCategory={handleCategory}
								isActive={category === item}
							></ButtonCategory>
						);
					})}
				</>
			)}
		</Wrapper>
	);
};
