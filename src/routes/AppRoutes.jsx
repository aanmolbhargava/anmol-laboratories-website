import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import LoadingScreen from "../components/common/LoadingScreen";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Contact = lazy(() => import("../pages/Contact"));
const BusinessEnquiry = lazy(() => import("../pages/BusinessEnquiry"));
const Cart = lazy(() => import("../pages/Cart"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const Profile = lazy(() => import("../pages/Profile"));
const Orders = lazy(() => import("../pages/Orders"));
import ProtectedRoute from "../components/auth/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/business-enquiry" element={<BusinessEnquiry />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
