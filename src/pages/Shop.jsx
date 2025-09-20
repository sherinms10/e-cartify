// src/pages/Shop.jsx
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import b2 from "../assets/img/banner/b1.jpg"
import { products } from "../components/Products";


import { ShoppingCart } from "lucide-react";
import ProductCard from "../components/ProductCard";




export default function Shop() {
  return (
    <>

       {/* Header */}
      <section
        className="h-[50vh] flex flex-col items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${b2})` }}
      >
        <h2 className="text-5xl font-bold">New Designs</h2>
        <p className="mt-2">Save more with coupons & up to 70%</p>
      </section>

      {/* Products */}
      <div className="flex flex-wrap justify-center gap-10 mt-8 mb-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

      {/* Pagination */}
      {/* <section className="flex justify-center space-x-3 my-8">
        <a href="#" className="bg-teal-600 text-white px-4 py-2 rounded">1</a>
        <a href="#" className="bg-teal-600 text-white px-4 py-2 rounded">2</a>
        <a href="#" className="bg-teal-600 text-white px-4 py-2 rounded">
          <i className="fa fa-long-arrow-right"></i>
        </a>
      </section> */}

      

    </>
  );
}
