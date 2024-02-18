import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
	removeProduct,
	decrementQuantity,
	incrementQuantity,
	selectProductToCart,
} from "./cart-slice";
import { ReactComponent as Minus } from "../../assets/imgs/minus.svg";
import { ReactComponent as Plus } from "../../assets/imgs/plus.svg";
import { ReactComponent as Trash } from "../../assets/imgs/trashcan.svg";

const CartProductItem = styled.div`
	width: 100%;
	height: 60px;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;
	gap: 8px;

	position: relative;
	overflow: hidden;
`;

const CartProductItemImg = styled.img`
	width: 60px;
	height: 60px;
	object-fit: contain;
`;

const CartProductItemInfo = styled.div`
	width: 100%;
	margin-right: 20px;
	display: flex;
	flex-flow: row nowrap;
	align-items: flex-start;
	justify-content: space-between;
`;

const CartProductItemInfoWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 8px;
`;

const CartProductItemText = styled.div`
	color: var(--colors-graymain);
	font-weight: var(--fw-s);
	font-size: var(--fs-s);
	line-height: var(--lh-s);
	letter-spacing: var(--ls-s);
`;

const CartProductItemCounter = styled.div`
	width: 72px;
	height: 24px;
	padding: 4px;
	background-color: var(--colors-graylight);
	border-radius: var(--radii);
	border: 0;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	gap: 8px;

	color: var(--colors-graydark);
	font-weight: var(--fw-xs);
	font-size: var(--fs-xs);
	line-height: var(--lh-xs);
	letter-spacing: var(--ls-xs);
`;

const CartProductItemBtn = styled.button`
	width: 16px;
	height: 16px;

	padding: 0px;
	background-color: var(--colors-graylight);
	box-shadow: none;
	border: 0;
	cursor: pointer;

	svg {
		width: 8px;
		height: 8px;
		fill: var(--colors-graydark);
		vertical-align: middle;
	}
`;

const CartProductItemRemoveBtn = styled.button`
	width: 280px;
	height: 60px;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;
	gap: 4px;

	padding: 20px 0px 20px 14px;
	background-color: var(--colors-red);
	box-shadow: none;
	border: none;
	border-radius: var(--radii) 0px 0px var(--radii);

	color: var(--colors-white);
	font-weight: var(--fw-s);
	font-size: var(--fs-s);
	line-height: var(--lh-s);
	letter-spacing: var(--ls-s);

	svg {
		width: 20px;
		height: 20px;
		fill: var(--colors-white);
	}

	position: absolute;
	right: -280px;
	top: 50%;
	transform: translateY(-50%);
	transition: right 300ms ease-out;

	${CartProductItem}:hover & {
		right: calc(-280px + 15px);
	}
	&:hover {
		cursor: pointer;
		right: calc(-280px + 100px) !important;
	}
`;

const buttonUnClickedStyle = {};

const buttonClickedStyle = {
	right: "0px",
	transition: "right 200ms 300ms ease-in",
};

export const CartProductsListItem = ({ id, title, price, image }) => {
	const [isClicked, setIsClicked] = useState(false);
	const changeableProductInCart = useSelector((state) =>
		selectProductToCart(state, id)
	);
	const dispatch = useDispatch();

	const totalValueOneProduct = price * changeableProductInCart.quantity;

	const handleClick = () => {
		setIsClicked((prevState) => !prevState);
		setTimeout(() => {
			dispatch(removeProduct(changeableProductInCart.id));
		}, 300);
	};

	return (
		<CartProductItem>
			<CartProductItemImg
				src={image}
				alt={title}
				width="60"
				height="60"
			></CartProductItemImg>
			<CartProductItemInfo>
				<CartProductItemInfoWrapper>
					<CartProductItemText>{title}</CartProductItemText>
					<CartProductItemCounter>
						<CartProductItemBtn
							onClick={() =>
								dispatch(
									decrementQuantity(
										changeableProductInCart.id
									)
								)
							}
						>
							<Minus />
						</CartProductItemBtn>
						<span>{changeableProductInCart.quantity}</span>
						<CartProductItemBtn
							onClick={() =>
								dispatch(
									incrementQuantity(
										changeableProductInCart.id
									)
								)
							}
						>
							<Plus />
						</CartProductItemBtn>
					</CartProductItemCounter>
				</CartProductItemInfoWrapper>
				<CartProductItemText>
					${totalValueOneProduct}
				</CartProductItemText>
			</CartProductItemInfo>
			<CartProductItemRemoveBtn
				onClick={handleClick}
				style={isClicked ? buttonClickedStyle : buttonUnClickedStyle}
			>
				<Trash />
				{isClicked && <span>product has been delete</span>}
			</CartProductItemRemoveBtn>
		</CartProductItem>
	);
};
