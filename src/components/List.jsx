import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  padding: 0 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
`;

export const List = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};