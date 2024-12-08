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
import Navbar from "./core/components/Navbar";
import Footer from "./core/components/Footer";
import { useProductStore } from "./core/services/useProductStore";

const Home = React.lazy(() => import("./pages/Home"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductById = React.lazy(() => import("./pages/ProductById"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Services = React.lazy(() => import("./pages/Services"));
const Quotation = React.lazy(() => import("./pages/Quotation"));
const About = React.lazy(() => import("./pages/About"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

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
            <Route path="/products/:productId" element={<ProductById />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/quotation" element={<Quotation />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
