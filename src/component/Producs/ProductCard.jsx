import React, { useContext } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Discount Badge */}
      <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
        10% OFF
      </span>

      {/* Wishlist */}
      <button className="absolute top-3 right-3 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition">
        <Heart size={18} />
      </button>

      <Link to={`/product/${item.id}`}>
        {/* Product Image */}
        <div className="bg-gradient-to-b from-green-50 to-white overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-56 object-contain p-5 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
          {item.category}
        </span>

        {/* Product Name */}
        <h3 className="mt-3 text-lg font-semibold text-gray-800 line-clamp-2 min-h-[56px]">
          {item.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <Star size={16} className="fill-yellow-400 text-yellow-400" />

          <span className="text-sm text-gray-500 ml-1">(4.9)</span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-3 line-clamp-2">
          {item.description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold text-green-600">
            ₹{item.price}
          </span>

          <span className="text-gray-400 line-through">
            ₹{Math.round(item.price * 1.2)}
          </span>
        </div>

        {/* Button */}
        <button
          onClick={() => {
            addToCart(item);
          }}
          className="w-full mt-5 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition-all duration-300"
        >
          <ShoppingCart size={18} />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
