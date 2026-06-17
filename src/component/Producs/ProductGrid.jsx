import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../../data/Product";

const ProductGrid = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Products</h2>

        <p className="text-gray-500">{Product.length} Products Available</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Product.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
