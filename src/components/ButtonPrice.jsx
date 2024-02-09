import styled from "styled-components";
import { ReactComponent as Cart } from "../assets/imgs/cart.svg";

export const Button = styled.button`
  height: 24px;

  padding: 0px 8px 0px 4px;
  background-color: var(--colors-bluelight);
  box-shadow: none;
  border-radius: var(--radii);
  border: 0;

  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--colors-white);
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--colors-white);
  }

  span {
    font-weight: var(--fw-s);
    font-size: var(--fs-s);
    line-height: var(--lh-s);
    letter-spacing: var(--ls-s);
  }
`;

export const ButtonPrice = ({ price }) => {
  return (
    <Button onClick={() => console.log("Add product in cart!")}>
      <Cart />
      <span>${price}</span>
    </Button>
  )
}
