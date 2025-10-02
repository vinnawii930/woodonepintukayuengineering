import { Route, Routes } from "react-router";
import Beranda from "./pages/Beranda";
import TentangKami from "./pages/TentangKami";
import FAQs from "./pages/FAQs";
import ProductsPage from "./pages/ProductsPage";
import DetailProduct from "./components/Layouts/DetailProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/produk" element={<ProductsPage />} />
        <Route path="detail-produk/:id" element={<DetailProduct/>} />
      </Routes>
    </>
  );
}

export default App;
