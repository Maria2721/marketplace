import { useSelector } from "react-redux";
import styled from "styled-components";
import { useScrollController } from "../../hooks/useScrollController";

import { ReactComponent as CartModalTitleIcon } from "../../assets/imgs/cart.svg";
import { ReactComponent as CartModalCloseIcon } from "../../assets/imgs/clear.svg";

import { selectAllProductsToCart } from "../cart/cart-slice";
import { CartProductsListItem } from "./CartProductsListItem";

const CartModal = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(239, 238, 244, 0.85);
	width: 100vw;
	height: 100vh;
`;

const cartModalShow = {
	display: "flex",
	alignItems: "flex-start",
	justifyContent: "flex-end",
	zIndex: 1000,
};

const CartModalInner = styled.div`
	position: relative;
	width: 320px;
	height: 100vh;
	min-height: 430px;
	padding: 22px 0px 24px 20px;
	background-color: var(--colors-white);

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 20px 1fr auto;
	gap: 36px;
	z-index: 1;
`;

const CartModalHeader = styled.div`
	margin-right: 20px;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
`;

const CartModalTitle = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;
	gap: 4px;

	svg {
		width: 20px;
		height: 20px;
		fill: var(--colors-bluelight);
	}

	color: var(--colors-bluelight);
	font-weight: var(--fw-m);
	font-size: var(--fs-m);
	line-height: var(--lh-m);
	letter-spacing: var(--ls-m);
`;

const CartModalCloseBtn = styled.button`
	width: 8px;
	height: auto;

	padding: 0px;
	background-color: var(--colors-white);
	box-shadow: none;
	border: 0;
	cursor: pointer;

	svg {
		width: 8px;
		height: 8px;
		fill: var(--colors-graymain);
	}
`;

const CartModalEmpty = styled.div`
	margin-right: 20px;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	gap: 0px;

	color: var(--colors-graydark);
	font-weight: var(--fw-s);
	font-size: var(--fs-s);
	line-height: 14px;
	letter-spacing: var(--ls-s);
`;

const CartModalTotalBtn = styled.button`
	width: 280px;
	height: 40px;

	padding: 2px 8px 4px 8px;
	box-shadow: none;
	border-radius: var(--radii);
	border: 0;

	background-color: var(--colors-bluelight);
	color: var(--colors-white);
	cursor: pointer;

	font-weight: var(--fw-l);
	font-size: var(--fs-l);
	line-height: var(--lh-l);
	letter-spacing: var(--ls-l);
`;

const CartModalProductsList = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 16px;
	padding: 0px 0px 40px 0px;
`;

const CartModalTotal = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 8px;
	padding: 40px 20px 0px 0px;
`;

const CartModalTotalValues = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
`;

const CartModalTotalPositions = styled.div`
	color: var(--colors-graymain);
	font-weight: var(--fw-xs);
	font-size: var(--fs-xs);
	line-height: var(--lh-xs);
	letter-spacing: var(--ls-xs);
`;

const CartModalTotalSum = styled.div`
	color: var(--colors-graydark);
	font-weight: var(--fw-xl);
	font-size: var(--fs-xl);
	line-height: var(--lh-xl);
	letter-spacing: var(--ls-xl);
`;

export const Cart = ({ opened, handleModal, popupRef }) => {
	const productsInCart = useSelector((state) =>
		selectAllProductsToCart(state)
	);
	useScrollController(opened);

	const totalValue = productsInCart.reduce(
		(accumulator, currentValue) =>
			accumulator + currentValue.price * currentValue.quantity,
		0
	);

	if (!opened) {
		return null;
	}

	return (
		<CartModal style={opened ? cartModalShow : null}>
			<CartModalInner ref={popupRef}>
				<CartModalHeader>
					<CartModalTitle>
						<CartModalTitleIcon />
						cart
					</CartModalTitle>
					<CartModalCloseBtn onClick={handleModal}>
						<CartModalCloseIcon />
					</CartModalCloseBtn>
				</CartModalHeader>
				{productsInCart.length === 0 ? (
					<>
						<CartModalEmpty>cart is empty :{"("}</CartModalEmpty>
						<CartModalTotalBtn onClick={handleModal}>
							back to products
						</CartModalTotalBtn>
					</>
				) : (
					<>
						<CartModalProductsList>
							{productsInCart.map((item) => (
								<CartProductsListItem
									key={item.title}
									{...item}
								/>
							))}
						</CartModalProductsList>
						<CartModalTotal>
							<CartModalTotalValues>
								<CartModalTotalPositions>
									{productsInCart.length} positions
								</CartModalTotalPositions>
								<CartModalTotalSum>
									${totalValue}
								</CartModalTotalSum>
							</CartModalTotalValues>
							<CartModalTotalBtn
								onClick={() => console.log("Place an order!")}
							>
								place an order
							</CartModalTotalBtn>
						</CartModalTotal>
					</>
				)}
			</CartModalInner>
		</CartModal>
	);
};
