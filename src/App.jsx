import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Main } from "./components/Main";
import { ControlsPanel } from "./features/controls/ControlsPanel";
import { Cart } from "./features/cart/Cart";
import { Footer } from "./components/Footer";

import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  const [openedCart, setOpenedCart] = useState(false);

  return (
    <>
      {/* <Cart
        opened={openedCart}
        handle={() => setOpenedCart((curr) => !curr)}
      /> */}
      <Main>
        <ControlsPanel />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
