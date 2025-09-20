// src/pages/ThankYou.jsx
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ThankYou() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 h-[40vh] flex flex-col justify-center items-center text-white text-center">
        <h2 className="text-4xl font-bold">Order Confirmed 🎉</h2>
        <p className="mt-2">Thank you for your purchase!</p>
      </section>

      {/* Minimal Confirmation */}
      <section className="px-6 py-16 flex flex-col items-center text-center">
        <p className="text-gray-700 mb-6">
          Your order has been placed successfully.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/shop"
            className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition"
          >
            Continue Shopping
          </Link>
          <Link
            to="/"
            className="border border-gray-400 px-6 py-3 rounded hover:bg-gray-100 transition"
          >
            Go Home
          </Link>
        </div>
      </section>

    </>
  );
}
