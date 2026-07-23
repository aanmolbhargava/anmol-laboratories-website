import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./TopBar";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";

function PageContent() {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    >
      <Outlet />
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white shadow-2xl lg:hidden">
        <div className="grid grid-cols-4">
          <Link
            to="/"
            className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-gray-700"
          >
            🏠
            <span>Home</span>
          </Link>

          <Link
            to="/products"
            className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-gray-700"
          >
            🌿
            <span>Products</span>
          </Link>

          <Link
            to="/business-enquiry"
            className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-gray-700"
          >
            🏭
            <span>Enquiry</span>
          </Link>

          <Link
            to="/cart"
            className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-gray-700"
          >
            🛒
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FBF8]">
      <TopBar />

      <Navbar />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageContent />
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
