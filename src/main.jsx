import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";

import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <CartProvider>
            <App />
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 2500,
                style: {
                  borderRadius: "16px",
                  background: "#166534",
                  color: "#fff",
                  fontWeight: "600",
                },
              }}
            />
          </CartProvider>
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
