import React from "react";
import { useParams, Link } from "react-router-dom";
import { Product } from "../data/Product";
import { ArrowLeft, Heart, ShoppingCart } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();

  const product = Product.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">Product Not Found</h2>
      </div>
    );
  }

  return (
    <section className="w-[90%] max-w-7xl mx-auto py-10">
      {/* Back Button */}
      <Link
        to="/product"
        className="inline-flex items-center gap-2 mb-8 text-green-600 font-medium hover:text-green-700"
      >
        <ArrowLeft size={20} />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="bg-white rounded-3xl shadow-md border p-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-contain"
          />
        </div>

        {/* Product Info */}
        <div>
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold text-gray-800 mt-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-4">
            ⭐⭐⭐⭐⭐
            <span className="text-gray-500">(4.9 Reviews)</span>
          </div>

          <p className="text-gray-600 leading-7 mt-6">{product.description}</p>

          <div className="flex items-center gap-4 mt-8">
            <span className="text-4xl font-bold text-green-600">
              ₹{product.price}
            </span>

            <span className="text-xl text-gray-400 line-through">
              ₹{Math.round(product.price * 1.2)}
            </span>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <label className="block mb-2 font-medium">Quantity</label>

            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-24 border rounded-lg px-4 py-2"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
              <ShoppingCart size={20} />
              Add To Cart
            </button>

            <button className="w-14 h-14 border rounded-xl flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition">
              <Heart />
            </button>
          </div>

          {/* Features */}
          <div className="mt-10 space-y-3 text-gray-600">
            <p>✅ 100% Fresh Product</p>
            <p>🚚 Fast Delivery</p>
            <p>🔒 Secure Checkout</p>
            <p>💚 Organic & Healthy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
