// import { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// // helper to parse ₹ strings
// function parsePrice(value) {
//   if (!value) return 0;
//   return Number(value.toString().replace(/[₹,]/g, "")) || 0;
// }

// export default function Checkout() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [cartItems, setCartItems] = useState([]);
//   const [error, setError] = useState(""); // ✅ error state

//   // Billing form state
//   const [billing, setBilling] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     phone: "",
//   });

//   useEffect(() => {
//     if (location.state?.product) {
//       setCartItems([location.state.product]);
//     } else {
//       const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//       setCartItems(storedCart);
//     }
//   }, [location.state]);

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + parsePrice(item.price) * (item.qty || 1),
//     0
//   );

//   const handleChange = (e) => {
//     setBilling({ ...billing, [e.target.name]: e.target.value });
//   };

//   const handlePlaceOrder = () => {
//     // ✅ Validation check
//     if (
//       !billing.firstName ||
//       !billing.lastName ||
//       !billing.email ||
//       !billing.address ||
//       !billing.city ||
//       !billing.postalCode ||
//       !billing.phone
//     ) {
//       setError("⚠️ Please fill all required billing details.");
//       return;
//     }

//     setError(""); // clear error
//     if (!location.state?.product) {
//       localStorage.removeItem("cart");
//     }
//     navigate("/thank-you");
//   };

//   return (
//     <>
//       {/* Header */}
//       <section className="bg-gray-900 h-[30vh] flex flex-col justify-center items-center text-white text-center">
//         <h2 className="text-3xl md:text-5xl font-bold">Checkout</h2>
//         <p className="mt-2">Complete your purchase safely & quickly</p>
//       </section>

//       {/* Checkout section */}
//       <section className="px-4 sm:px-6 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left: Billing Details */}
//         <div className="lg:col-span-2">
//           <h3 className="text-2xl font-bold mb-6">Billing Details</h3>
//           <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={billing.firstName}
//               onChange={handleChange}
//               className="border p-3 rounded"
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={billing.lastName}
//               onChange={handleChange}
//               className="border p-3 rounded"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={billing.email}
//               onChange={handleChange}
//               className="border p-3 rounded md:col-span-2"
//             />
//             <input
//               type="text"
//               name="address"
//               placeholder="Street Address"
//               value={billing.address}
//               onChange={handleChange}
//               className="border p-3 rounded md:col-span-2"
//             />
//             <input
//               type="text"
//               name="city"
//               placeholder="City"
//               value={billing.city}
//               onChange={handleChange}
//               className="border p-3 rounded"
//             />
//             <input
//               type="text"
//               name="postalCode"
//               placeholder="Postal Code"
//               value={billing.postalCode}
//               onChange={handleChange}
//               className="border p-3 rounded"
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               value={billing.phone}
//               onChange={handleChange}
//               className="border p-3 rounded md:col-span-2"
//             />
//             <textarea
//               name="notes"
//               placeholder="Order Notes (optional)"
//               rows="4"
//               className="border p-3 rounded md:col-span-2"
//             ></textarea>
//           </form>
//         </div>

//         {/* Right: Order Summary */}
//         <div className="border p-6 rounded-lg shadow bg-white">
//           <h3 className="text-2xl font-bold mb-6">Your Order</h3>
//           <table className="w-full text-left mb-6 text-sm sm:text-base">
//             <thead>
//               <tr className="border-b">
//                 <th className="py-2">Product</th>
//                 <th className="py-2 text-right">Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item, idx) => (
//                 <tr key={idx} className="border-b">
//                   <td className="py-2">
//                     {item.title} {item.size ? `(Size: ${item.size})` : ""} x {item.qty}
//                   </td>
//                   <td className="py-2 text-right">
//                     ₹{(parsePrice(item.price) * (item.qty || 1)).toLocaleString()}
//                   </td>
//                 </tr>
//               ))}
//               <tr className="font-bold">
//                 <td className="py-2">Subtotal</td>
//                 <td className="py-2 text-right">₹{subtotal.toLocaleString()}</td>
//               </tr>
//               <tr className="font-bold">
//                 <td className="py-2">Total</td>
//                 <td className="py-2 text-right">₹{subtotal.toLocaleString()}</td>
//               </tr>
//             </tbody>
//           </table>

//           {/* Payment Options */}
//           {cartItems.length > 0 && (
//             <>
//               <div className="mb-4 text-sm sm:text-base">
//                 <label className="flex items-center gap-2">
//                   <input type="radio" name="payment" defaultChecked />
//                   Cash on Delivery
//                 </label>
//                 <label className="flex items-center gap-2 mt-2">
//                   <input type="radio" name="payment" />
//                   Credit/Debit Card
//                 </label>
//                 <label className="flex items-center gap-2 mt-2">
//                   <input type="radio" name="payment" />
//                   PayPal
//                 </label>
//               </div>

//               <button
//                 onClick={handlePlaceOrder}
//                 className="bg-teal-600 text-white w-full py-3 rounded hover:bg-teal-700 transition"
//               >
//                 Place Order
//               </button>

//               {/* ✅ Error Message */}
//               {error && (
//                 <p className="text-red-600 text-sm mt-3 text-center">{error}</p>
//               )}
//             </>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }



import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// helper to parse ₹ strings
function parsePrice(value) {
  if (!value) return 0;
  return Number(value.toString().replace(/[₹,]/g, "")) || 0;
}

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
const [errorMessage, setErrorMessage] = useState("");

  const [cartItems, setCartItems] = useState([]);

  // ✅ Billing details state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    notes: "",
  });

  useEffect(() => {
    if (location.state?.product) {
      setCartItems([location.state.product]);
    } else {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(storedCart);
    }
  }, [location.state]);

  // ✅ Check if required fields are filled
  const isFormValid =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.address &&
    form.city &&
    form.postalCode &&
    form.phone;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * (item.qty || 1),
    0
  );

  const handlePlaceOrder = () => {
    if (!isFormValid) {
      setErrorMessage("⚠️ Please fill all required billing details.");
      return;
    }

     setErrorMessage(""); // clear error if valid

  if (!location.state?.product) {
    localStorage.removeItem("cart");
  }
  navigate("/thank-you");
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gray-900 h-[30vh] flex flex-col justify-center items-center text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Checkout</h2>
        <p className="mt-2">Complete your purchase safely & quickly</p>
      </section>

      {/* Checkout section */}
      <section className="px-4 sm:px-6 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Billing Details */}
        <div className="lg:col-span-2  p-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 bg-teal-600 p-4 rounded-lg text-white">Billing Details</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name *"
              className="border p-3 rounded"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="border p-3 rounded"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="border p-3 rounded md:col-span-2"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Street Address *"
              className="border p-3 rounded md:col-span-2"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
            <input
              type="text"
              placeholder="City *"
              className="border p-3 rounded"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postal Code *"
              className="border p-3 rounded"
              value={form.postalCode}
              onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
            />
            <input
              type="text"
              placeholder="Phone Number *"
              className="border p-3 rounded md:col-span-2"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <textarea
              placeholder="Order Notes (optional)"
              rows="4"
              className="border p-3 rounded md:col-span-2"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            ></textarea>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className=" p-6 rounded-lg shadow-md bg-white">
          <h3 className="text-2xl font-bold mb-6 bg-teal-600 p-3 rounded-lg text-white">Your Order</h3>
          <table className="w-full text-left mb-6 text-sm sm:text-base">
            <thead>
              <tr className="border-b">
                <th className="py-2">Product</th>
                <th className="py-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-2">
                    {item.title} {item.size ? `(Size: ${item.size})` : ""} x {item.qty}
                  </td>
                  <td className="py-2 text-right">
                    ₹{(parsePrice(item.price) * (item.qty || 1)).toLocaleString()}
                  </td>
                </tr>
              ))}
              <tr className="font-bold">
                <td className="py-2">Subtotal</td>
                <td className="py-2 text-right">₹{subtotal.toLocaleString()}</td>
              </tr>
              <tr className="font-bold">
                <td className="py-2">Total</td>
                <td className="py-2 text-right">₹{subtotal.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>

          {/* Payment Options */}
          {cartItems.length > 0 && (
            <>
              <div className="mb-4 text-sm sm:text-base">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" defaultChecked />
                  Cash on Delivery
                </label>
                <label className="flex items-center gap-2 mt-2">
                  <input type="radio" name="payment" />
                  Credit/Debit Card
                </label>
                <label className="flex items-center gap-2 mt-2">
                  <input type="radio" name="payment" />
                  PayPal
                </label>
              </div>

              <button
                onClick={handlePlaceOrder}
                // disabled={!isFormValid}
                className={`w-full py-3 rounded transition bg-teal-600 text-white hover:bg-teal-700`}
              >
                Place Order
              </button>
              {errorMessage && (
  <p className="text-red-600 text-sm mt-3 text-center">{errorMessage}</p>
)}
            </>
          )}
        </div>
      </section>
    </>
  );
}
