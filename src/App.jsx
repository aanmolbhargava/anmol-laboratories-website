import AppRoutes from "./routes/AppRoutes";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";
import ScrollTop from "./components/common/ScrollTop";
import SearchModal from "./components/search/SearchModal";
function App() {
  return(
  <>
   <AppRoutes />;
  <FloatingWhatsApp />;
  <ScrollTop />;
  <SearchModal />;

  </> 
  )
}

export default App;