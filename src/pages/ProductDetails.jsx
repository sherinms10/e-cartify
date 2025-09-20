import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ShoppingCart, X, Loader2 } from "lucide-react"; // Loader2 is spinner
import ProductCard from "../components/ProductCard";
import { products } from "../components/Products";
import sizeChart from "../assets/img/size.webp";

export default function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  const [mainImg, setMainImg] = useState(product.img?.[0]);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const [featured, setFeatured] = useState([]);
  const [showChart, setShowChart] = useState(false);
  const [loading, setLoading] = useState(null); // "cart" | "buy" | null
const [sizeError, setSizeError] = useState("");

  useEffect(() => {
    setMainImg(product.img?.[0]);
    setQty(1);
    setSize("");
    setFeatured(products.filter((p) => p.id !== product.id));
    window.scrollTo(0, 0);
  }, [product]);

  function addToCartAction() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = {
  id: product.id,
  title: product.title,
  price: product.price,
  oldPrice: product.oldPrice,   // ✅ add this
  img: mainImg,
  qty: Number(qty),
  size: size || null,
};

    const existingIndex = cart.findIndex(
      (c) => c.id === item.id && (c.size || "") === (item.size || "")
    );
    if (existingIndex > -1) {
      cart[existingIndex].qty += item.qty;
    } else {
      cart.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  async function handleAddToCart() {
     if (!size) {
    setSizeError("⚠️ Please select a size before proceeding.");
    return;
  }
  setSizeError("");
    setLoading("cart");
    addToCartAction();
    // simulate loading
    setTimeout(() => {
      setLoading(null);
      navigate("/cart");
    }, 1200);
  }

  async function handleBuyNow() {
      if (!size) {
    setSizeError("⚠️ Please select a size before proceeding.");
    return;
  }
  setSizeError("");
  setLoading("buy");

  const item = {
    id: product.id,
    title: product.title,
    price: product.price,
    oldPrice: product.oldPrice,
    img: mainImg,
    qty: Number(qty),
    size: size || null,
  };

  // Save temporarily in localStorage OR pass via navigate state
  localStorage.setItem("checkoutItem", JSON.stringify(item));

  // simulate loading
  setTimeout(() => {
    setLoading(null);
    navigate("/checkout", { state: { product: item } }); // ✅ pass state
  }, 1200);
}


  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gray-900 h-48 flex items-center justify-center text-white">
        <h2 className="text-3xl font-semibold">Product Details</h2>
      </section>

      {/* Product Info */}
      <section className="px-4 md:px-12 py-10 grid gap-8 md:grid-cols-2">
        {/* Left: Images */}
        <div>
          <div className="w-full bg-white rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={mainImg}
              alt={product.title}
              className="max-h-[420px] w-auto object-contain"
            />
          </div>

          {/* <div className="mt-4 grid grid-cols-4 gap-3">
            {product.img?.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setMainImg(src)}
                className={`h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center rounded overflow-hidden border ${
                  mainImg === src
                    ? "ring-2 ring-teal-500"
                    : "border-gray-200"
                }`}
              >
                <img
                  src={src}
                  alt={`${product.title}-${idx}`}
                  className="max-h-full max-w-full object-contain"
                />
              </button>
            ))}
          </div> */}
        </div>

        {/* Right: Details */}
        <div>
          <p className="text-sm text-gray-500">{product.brand}</p>
          <h1 className="text-2xl md:text-3xl font-bold mt-1">
            {product.title}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <span className="text-teal-600 text-2xl font-bold">
              {product.price.toLocaleString()}
            </span>
            <span className="text-gray-400 line-through text-xs font-bold">
              {product.oldPrice.toLocaleString()}
            </span>
            <span className="text-red-600 text-xs font-bold">{product.discount}</span>
          </div>
          <p className="text-sm text-gray-600 mt-4">{product.description}</p>

          {/* Size */}
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Size
              </label>
              <div className="flex flex-wrap items-center gap-3">
                {["S", "M", "L", "XL"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-4 py-2 border rounded ${
                      size === s
                        ? "border-teal-600 bg-teal-50 text-teal-700 font-semibold"
                        : "border-gray-300 text-gray-700 hover:border-teal-400"
                    }`}
                  >
                    {s}
                  </button>
                ))}
                <button
                  onClick={() => setShowChart(true)}
                  className="text-blue-600 text-sm hover:underline"
                >
                  Size Chart
                </button>
              </div>

              {sizeError && (
    <p className="text-red-600 text-sm mt-2">{sizeError}</p>
  )}
            </div>

            {/* Quantity & Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
                className="w-16 border rounded p-2"
              />

              {/* Buy Now */}
              <button
                onClick={handleBuyNow}
                disabled={loading === "buy"}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 disabled:opacity-70"
              >
                {loading === "buy" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                  </>
                ) : (
                  "Buy Now"
                )}
              </button>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={loading === "cart"}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded flex items-center gap-2 disabled:opacity-70"
              >
                {loading === "cart" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Adding...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </>
                )}
              </button>

              <Link to="/cart" className="text-sm text-gray-700 underline">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="text-center py-12 px-6">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <p className="text-gray-600">You may also like</p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Size Chart Modal */}
      {showChart && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowChart(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-xl font-bold mb-4">Size Chart</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="overflow-x-auto">
                {/* Size Chart Table */}
                <table className="w-full border text-sm">
                  <thead className="bg-gray-100 text-center">
                    <tr>
                      <th className="px-2 py-1 border">Size</th>
                      <th className="px-2 py-1 border">Chest</th>
                      <th className="px-2 py-1 border">Shoulder</th>
                      <th className="px-2 py-1 border">Length</th>
                      <th className="px-2 py-1 border">Sleeve</th>
                      <th className="px-2 py-1 border">Waist</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td className="border px-2 py-1">S</td>
                      <td className="border px-2 py-1">38</td>
                      <td className="border px-2 py-1">17</td>
                      <td className="border px-2 py-1">26</td>
                      <td className="border px-2 py-1">7.5</td>
                      <td className="border px-2 py-1">38</td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-1">M</td>
                      <td className="border px-2 py-1">40</td>
                      <td className="border px-2 py-1">17.5</td>
                      <td className="border px-2 py-1">27</td>
                      <td className="border px-2 py-1">8</td>
                      <td className="border px-2 py-1">40</td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-1">L</td>
                      <td className="border px-2 py-1">42</td>
                      <td className="border px-2 py-1">18</td>
                      <td className="border px-2 py-1">28</td>
                      <td className="border px-2 py-1">8.5</td>
                      <td className="border px-2 py-1">42</td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-1">XL</td>
                      <td className="border px-2 py-1">44</td>
                      <td className="border px-2 py-1">19</td>
                      <td className="border px-2 py-1">29</td>
                      <td className="border px-2 py-1">9</td>
                      <td className="border px-2 py-1">44</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Instructions */}
              <div>
                <h4 className="font-semibold mb-2">Measuring T-Shirt Size</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Not sure about your t-shirt size? Follow these steps:
                </p>
                <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                  <li>
                    <b>Shoulder:</b> Measure the shoulder at the back, from edge to edge.
                  </li>
                  <li>
                    <b>Chest:</b> Measure around the body under the arms at the fullest part.
                  </li>
                  <li>
                    <b>Sleeve:</b> Measure from shoulder seam through arm to cuff.
                  </li>
                  <li>
                    <b>Length:</b> From highest point of shoulder seam to bottom hem.
                  </li>
                </ul>
                <img
                  src={sizeChart}
                  alt="size guide"
                  className="w-40 md:w-52 mt-4 mx-auto md:mx-0"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
