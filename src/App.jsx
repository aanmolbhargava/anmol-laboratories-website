import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import AppRoutes from "./routes/AppRoutes";
import FloatingWhatsApp from "./components/common/FloatingWhatsapp";
import ScrollTop from "./components/common/ScrollTop";
import SearchModal from "./components/search/SearchModal";
import LoadingScreen from "./components/common/LoadingScreen";
import ScrollProgress from "./components/common/ScrollProgress";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* <ScrollProgress /> */}

          <AppRoutes />

          {/* <FloatingWhatsApp /> */}

          {/* <ScrollTop /> */}

          {/* <SearchModal /> */}
        </>
      )}
    </>
  );
}

export default App;
