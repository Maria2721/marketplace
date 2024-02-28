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

const Text = styled.div`
	width: 100%;
	padding: 18px 14px 18px 14px;
	color: var(--colors-graydark);
	font-weight: var(--fw-xl);
	font-size: var(--fs-xl);
	line-height: var(--lh-xl);
	letter-spacing: var(--ls-xl);
`;

export const Categories = () => {
	const [categories, { status, error }] = useCategories();
	const [category, handleCategory] = useCategory();

	return (
		<Wrapper>
			{error && <Text>Can't fetch data</Text>}
			{status === "loading" && <Text>Loading...</Text>}

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
