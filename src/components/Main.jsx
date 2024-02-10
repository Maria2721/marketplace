import styled from "styled-components";

const Wrapper = styled.main`
	padding: 0 0;
`;

export const Main = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};
