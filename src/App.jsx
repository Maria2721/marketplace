import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import { Main } from "./components/Main";
import { ControlsPanel } from "./components/ControlsPanel";
import { Cart } from "./features/cart/Cart";
import { Footer } from "./components/Footer";

import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
	const [openedCart, setOpenedCart] = useState(false);
	const popupRef = useRef();

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (popupRef.current && !popupRef.current.contains(event.target)) {
				setOpenedCart(false);
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	return (
		<>
			<Cart
				opened={openedCart}
				handleModal={() => setOpenedCart((curr) => !curr)}
				className="modal__cart"
				popupRef={popupRef}
			/>
			<Main>
				<ControlsPanel
					handleModal={() => setOpenedCart((curr) => !curr)}
				/>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route
						path="?category=:category"
						element={<CategoryPage />}
					/>
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Main>
			{/* <Footer /> */}
		</>
	);
}

export default App;
