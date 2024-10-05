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

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster />

      <Suspense fallback={<CustomLoader />}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
