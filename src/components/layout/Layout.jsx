import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./TopBar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FBF8]">

      <TopBar />

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default Layout;