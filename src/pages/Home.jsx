import buttonImg from "../assets/img/button.png";
import hero from "../assets/img/hero4.png";
import hero1 from "../assets/img/dress.jpg";
import hero2 from "../assets/img/hero.jpg";
import hero3 from "../assets/img/men.jpg";
import hero4 from "../assets/img/men4.jpg";

import f1 from "../assets/img/features/f1.png"
import f2 from "../assets/img/features/f2.png";
import f3 from "../assets/img/features/f3.png";
import f4 from "../assets/img/features/f4.png";
import f5 from "../assets/img/features/f5.png";
import f6 from "../assets/img/features/f6.png";

import b2 from "../assets/img/banner/b2.jpg"
import b17 from "../assets/img/banner/b17.jpg"
import b10 from "../assets/img/banner/b10.jpg"
import b7 from "../assets/img/banner/b7.jpg"
import b4 from "../assets/img/banner/b4.jpg"
import b18 from "../assets/img/banner/b18.jpg"
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { products } from "../components/Products";





export default function Home() {

    const navigate = useNavigate();
  
      // hero images list
  const images = [hero,hero1, hero2, hero3, hero4];
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
      id="hero"
      className="relative bg-cover bg-right-top h-[90vh] flex flex-col justify-center items-start px-8 md:px-20 transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
    {/* <section
        id="hero"
        className=" bg-cover bg-right-top h-[90vh] flex flex-col justify-center items-start px-8 md:px-20"
        style={{ backgroundImage: `url(${hero})` } }
      ></section> */}
      <div className="bg-black/40 absolute inset-0" /> 

      <div className="relative z-10">
        <h4 className="mb-2 text-lg text-white">Trade-in-offer</h4>
        <h2 className="text-3xl md:text-5xl font-bold text-teal-300">
          Super value deals
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          On all products
        </h1>
        <p className="mt-2 mb-4 text-gray-200">
          Save more with coupons &amp; up to 70%
        </p>
        <button
          className="bg-no-repeat bg-left bg-contain text-[#088178] font-bold py-[14px] pr-[80px] pl-[65px] text-[15px] cursor-pointer"
          style={{ backgroundImage: `url(${buttonImg})` }}
          onClick={() => navigate("/shop")}
        >
          Shop Now
        </button>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-1 h-1 rounded-full transition ${
              index === i ? "bg-teal-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>

      {/* Features */}
      <section
        id="feature"
        className="flex flex-wrap justify-center gap-6 py-12 px-6"
      >
        {[
          { img: f1, label: "Free Shipping", color: "bg-sky-300" },
          { img: f2, label: "Online Order", color: "bg-pink-300" },
          { img: f3, label: "Save Money", color: "bg-green-300" },
          { img: f4, label: "Promotions", color: "bg-blue-300" },
          { img: f5, label: "Happy Sell", color: "bg-blue-300" },
          { img: f6, label: "24/7 Support", color: "bg-orange-300" },
        ].map((f, i) => (
          <div
            key={i}
            className=" w-44 text-center p-6 border-gray-300 rounded-lg shadow hover:shadow-2xl transition"
          >
            <img src={f.img} alt={f.label} className="mx-auto mb-3" />
            <h6 className={`inline-block px-2 py-1 rounded ${f.color}`}>
              {f.label}
            </h6>
          </div>
        ))}
      </section>

     {/* Featured Products */}
 <section id="product1" className="text-center py-12 px-6">
        <h1 className="text-3xl font-bold">Featured Products</h1>
        <p className="text-gray-600">Summer Collection New Modern Design</p>
         <div className="flex flex-wrap justify-center gap-10 mt-8 mb-6">
                        {products.slice(0,4).map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </div>
      </section>


      {/* Banner */}
      <section
        id="banner"
        className=" bg-cover bg-center h-[40vh] flex flex-col justify-center items-center text-center text-white"
         style={{ backgroundImage: `url(${b2})` }}
      >
        <h4 className="text-lg">Repair Services</h4>
        <h1 className="text-2xl md:text-3xl font-bold">
          Up to <span className="text-red-500">70% off</span> - All T-shirts &amp;
          Accessories
        </h1>
        <button
  onClick={() => navigate("/shop")}
        
        className="mt-4 bg-white text-black px-6 cursor-pointer py-2 rounded hover:bg-teal-600 hover:text-white">
          Explore More
        </button>
      </section>

   {/* New Arrivals */}
<section id="new" className="text-center py-12 px-6">
        <h1 className="text-3xl font-bold">New Arrivals</h1>
        <p className="text-gray-600">Latest Fashion Picks</p>
         <div className="flex flex-wrap justify-center gap-10 mt-8 mb-6">
                        {products.slice(4,8).map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </div>
      </section>


      {/* Small Banners */}
      <section id="sm-banner" className="flex flex-wrap justify-center gap-6 px-6">
        <div
          className="w-full md:w-[580px] h-[50vh]  bg-cover bg-center flex flex-col justify-center items-start p-6 text-white"
          style={{ backgroundImage: `url(${b17})` }}
        >
          <h4>Crazy Deals</h4>
          <h2 className="text-3xl font-bold">Buy 1 Get 1 Free</h2>
          <span>The best classic dress is on sale at Cara</span>
          <button 
  onClick={() => navigate("/shop")}
          className="mt-4 border px-4 py-2 cursor-pointer">Learn More</button>
        </div>
        <div
          className="w-full md:w-[580px] h-[50vh]  bg-cover bg-center flex flex-col justify-center items-start p-6 text-white"
          style={{ backgroundImage: `url(${b10})` }}
        >
          <h4>Spring/Summer</h4>
          <h2 className="text-3xl font-bold">Upcoming Season</h2>
          <span>The best classic dress is on sale at Cara</span>
          <button 
  onClick={() => navigate("/shop")}
          className="mt-4 border px-4 py-2 cursor-pointer">Collection</button>
        </div>
      </section>

      {/* Triple Banner */}
      <section id="banner3" className="flex flex-wrap justify-between gap-6 px-6 py-12">
        <div className="w-full md:w-[30%] h-[30vh] bg-cover flex flex-col justify-center items-start p-6 text-white"
        style={{ backgroundImage: `url(${b7})` }}
        >
          <h2 className="text-lg font-bold">SEASONAL SALE</h2>
          <h3 className="text-red-500 font-semibold">Winter Collection -56% OFF</h3>
        </div>
        <div className="w-full md:w-[30%] h-[30vh]  bg-cover flex flex-col justify-center items-start p-6 text-white"
        style={{ backgroundImage: `url(${b4})` }}
        >
          <h2 className="text-lg font-bold">NEW FOOTWEAR COLLECTION</h2>
          <h3 className="text-red-500 font-semibold">Spring/Summer 2023</h3>
        </div>
        <div className="w-full md:w-[30%] h-[30vh]  bg-cover flex flex-col justify-center items-start p-6 text-white"
        style={{ backgroundImage: `url(${b18})` }}
        >
          <h2 className="text-lg font-bold">T-SHIRTS</h2>
          <h3 className="text-red-500 font-semibold">New Trendy Prints</h3>
        </div>
      </section>

     
    </div>
  );
}
