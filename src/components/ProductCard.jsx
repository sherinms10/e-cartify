import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";


export default function ProductCard({ product }) {
  
  const navigate = useNavigate();

  return (
    <div className="w-60 rounded-xl p-4 shadow hover:shadow-lg cursor-pointer transition border border-green-100">
      <img
  src={Array.isArray(product.img) ? product.img[0] : product.img}
  alt={product.title}
  className="w-full h-72 object-cover rounded-lg"
  onClick={() => navigate(`/product/${product.id}`)}
/>

      <div className="text-left mt-2">
        <span className="text-gray-500 text-sm">{product.brand}</span>
        <h5 className="text-gray-800 font-semibold line-clamp-2">
          {product.title}
        </h5>
        <div className="flex justify-between">
          <h4 className="text-teal-600 font-bold mt-2">
            {product.price}{" "}
            <span className="text-gray-400 line-through text-xs">
              {product.oldPrice}
            </span>
            <span className="text-red-600 text-xs ml-2">
              {product.discount}
            </span>
          </h4> 
          <ShoppingCart
            onClick={() => navigate(`/product/${product.id}`)}
            className="w-6 h-6 mt-2 cursor-pointer text-green-600"
          />
        </div>
      </div>
    </div>
  );
}
