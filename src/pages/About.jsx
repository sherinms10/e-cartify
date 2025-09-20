// src/pages/About.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import banner from "../assets/img/about/banner.png"
import a6 from "../assets/img/about/a6.jpg"
import f1 from "../assets/img/features/f1.png"
import f2 from "../assets/img/features/f2.png";
import f3 from "../assets/img/features/f3.png";
import f4 from "../assets/img/features/f4.png";
import f5 from "../assets/img/features/f5.png";
import f6 from "../assets/img/features/f6.png";
import app from "../assets/img/about/1.mp4";




export default function About() {
  return (
    <>

      {/* Page Header */}
      <section className=" h-[50vh] flex flex-col items-center justify-center text-white text-center"
                    style={{ backgroundImage: `url(${banner})` }}
      >
        <h2 className="text-5xl font-bold">Know Us</h2>
        <p className="mt-2">Making shopping simple, secure, and reliable for everyone, everywhere.</p>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 px-8 py-16">
        <img src={a6} alt="About" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Who We Are?</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
          We are a dedicated team passionate about creating a modern shopping experience. With features like free shipping, secure online ordering, exciting promotions, and 24/7 support, we ensure every customer enjoys a seamless journey. Our commitment is to deliver trust, value, and innovation in everything we do.
          </p>
          <abbr className="block mb-3">
  Shop with confidence — enjoy free shipping, exclusive deals, and secure online orders backed by 24/7 support.
</abbr>
<div className="bg-gray-200 text-gray-700  rounded">
  <marquee behavior="scroll" direction="left" scrollamount="5">
    Free Shipping • Online Orders • Save Money • Exciting Promotions • 24/7 Support
  </marquee>
</div>

        </div>
      </section>

      {/* Video Section */}
      <section className="text-center px-8 py-16">
        <h1 className="text-3xl font-bold">
          Download our <a href="#" className="text-teal-600 hover:underline">App</a>
        </h1>
        <div className="w-full md:w-3/4 mx-auto mt-6">
          <video
            autoPlay
            muted
            loop
            src={app}
            className="w-full rounded-xl shadow-lg"
          ></video>
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
    </>
  );
}
