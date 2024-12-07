import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ScrollToTop } from "./core/hooks/ScrollToTop";
import CustomLoader from "./core/components/CustomLoader";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Quotation from "./pages/Quotation";
import About from "./pages/About";
import Navbar from "./core/components/Navbar";
import Footer from "./core/components/Footer";
import { useProductStore } from "./core/services/useProductStore";

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  const isLoading = useProductStore((store) => store.isLoading);

  return (
    <Router>
      <ScrollToTop />
      <Toaster />

      <Navbar />

      {isLoading && <CustomLoader />}

      <div className="min-h-[50vh]">
        <Suspense fallback={<CustomLoader />}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/quotation" element={<Quotation />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
