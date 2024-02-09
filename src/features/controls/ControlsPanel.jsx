import styled from "styled-components";

import { Search } from "../search/Search";
import { Categories } from "../categories/Categories";
import { ButtonCart } from "../../components/ButtonCart";

const Wrapper = styled.div`
  height: 64px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: var(--colors-white);
  padding: 18px 14px 18px 14px;
`;

export const ControlsPanel = () => {
    return (
        <Wrapper>
            <Search />
            <Categories />
            <ButtonCart />
        </Wrapper>
    );
};
