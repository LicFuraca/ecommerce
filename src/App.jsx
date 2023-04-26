import { Route, Routes } from "react-router-dom";
import { FilterProvider } from "./contexts/FilterContext";
import { AuthProvider } from "./contexts/AuthContext";
import { ShopCartProvider } from "./contexts/ShopCartContext";
import ScrollToTop from "./hooks/ScrollToTop";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProductsList from "./pages/ProductsList";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <FilterProvider>
          <ShopCartProvider>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/products-list" element={<ProductsList />} />
              <Route
                path="product-details/:productId"
                element={<ProductDetail />}
              />
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </ShopCartProvider>
        </FilterProvider>
      </AuthProvider>
    </>
  );
}

export default App;
