import styled from "styled-components";

import { useCategories } from './use-categories';
import { ButtonCategory } from "../../components/ButtonCategory";

export const Wrapper = styled.div`
  width: 100%;
  height: 28px;

  border-radius: var(--radii);
  border: 0;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 1px;
`;

export const Categories = () => {
    const [categories, { status, error }] = useCategories();

    return (
        <Wrapper>
            {error && <h2>Can't fetch data</h2>}
            {status === "loading" && <h2>Loading...</h2>}

            {status === "received" && (categories.map((c) => {
                return <ButtonCategory category={c}></ButtonCategory>;
            }))}
        </Wrapper>
    )
}
