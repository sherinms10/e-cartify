// src/pages/Cart.jsx
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Helper: convert ₹ strings to numbers
function parsePrice(value) {
  if (!value) return 0;
  return Number(value.toString().replace(/[₹,]/g, "")) || 0;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Remove item
  const removeItem = (id, size) => {
    const updatedCart = cartItems.filter(
      (item) => !(item.id === id && (item.size || "") === (size || ""))
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Totals (using parsePrice)
  const totalPrice = cartItems.reduce(
    (sum, i) => sum + parsePrice(i.price) * (i.qty || 1),
    0
  );

  const totalDiscount = cartItems.reduce(
    (sum, i) =>
      sum +
      (parsePrice(i.oldPrice) - parsePrice(i.price)) * (i.qty || 1),
    0
  );

  const totalAmount = totalPrice; // before platform fees/coupons

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left - Cart Items */}
        <div className="lg:col-span-2 rounded-md p-4 shadow bg-white">
  {cartItems.length > 0 ? (
    <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
      {cartItems.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded shadow p-4 flex gap-4 items-center"
        >
          {/* Image */}
          <Link to={`/product/${item.id}`}>
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 object-contain"
            />
          </Link>

          {/* Info */}
          <div className="flex-1">
            <Link to={`/product/${item.id}`}>
              <h3 className="font-semibold text-gray-800 line-clamp-1 hover:text-teal-500">
                {item.title}
              </h3>
            </Link>

            {item.size && (
              <p className="text-sm text-gray-500">Size: {item.size}</p>
            )}
            <p className="text-sm text-gray-500">Qty: {item.qty}</p>
            <div className="flex gap-6 mt-2 text-sm font-medium">
              <button
                onClick={() => removeItem(item.id, item.size)}
                className="text-red-600 hover:underline flex items-center gap-1"
              >
                <Trash2 className="w-4 h-4" /> Remove
              </button>
            </div>
          </div>

          {/* Price */}
          <p className="font-semibold text-gray-700">
            ₹{(parsePrice(item.price) * item.qty).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  ) : (
    <div className="bg-white p-36 rounded shadow text-center w-full items-center">
      <p className="text-gray-600">Your cart is empty</p>
    </div>
  )}

  {/* Place Order Button */}
  {cartItems.length > 0 && (
    <div className="bg-white shadow p-4 text-right mt-4">
      <button
        onClick={() => navigate("/checkout")}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-semibold rounded"
      >
        PLACE ORDER
      </button>
    </div>
  )}
</div>


        {/* Right - Price Details */}
        {cartItems.length > 0 && (
          <div className="bg-white rounded shadow p-6 h-fit">
            <h3 className="text-lg font-bold text-gray-700 mb-4">
              PRICE DETAILS
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Price ({cartItems.length} items)</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>₹{totalDiscount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Coupons for you</span>
                <span>-₹122</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span>₹10</span>
              </div>
              <div className="flex justify-between">
                <span>Protect Promise Fee</span>
                <span>₹38</span>
              </div>

              <hr />

              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span>
                  ₹{(totalAmount - 122 + 10 + 38).toLocaleString()}
                </span>
              </div>
              <p className="text-green-600 text-sm font-medium">
                You will save ₹{(totalDiscount + 122).toLocaleString()} on this
                order
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
