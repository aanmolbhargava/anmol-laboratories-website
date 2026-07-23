import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import LoadingScreen from "../components/common/LoadingScreen";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Manufacturing = lazy(() => import("../pages/Manufacturing"));
const Contact = lazy(() => import("../pages/Contact"));
const BusinessEnquiry = lazy(() => import("../pages/BusinessEnquiry"));
const Cart = lazy(() => import("../pages/Cart"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/business-enquiry" element={<BusinessEnquiry />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
