import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Manufacturing from "../pages/Manufacturing.jsx";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:slug" element={<ProductDetails />} />

        <Route
          path="/manufacturing"
          element={<Manufacturing />}
        />

        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;