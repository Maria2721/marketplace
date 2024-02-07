import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Main } from "./components/Main";
import { CartModal } from "./components/CartModal";
import { CategoriesPanel } from "./components/CategoriesPanel";
import { Footer } from "./components/Footer";

import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  const [openedCartModal, setOpenedCartModal] = useState(false);

  return (
    <>
      <CartModal
        opened={openedCartModal}
        handleModal={() => setOpenedCartModal((curr) => !curr)}
      />
      <Main>
        <CategoriesPanel />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
