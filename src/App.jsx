import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Newsletter from "./components/Newsletter";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/Scroll";

export default function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
        </main>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}


