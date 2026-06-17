import React from "react";
import ProductGrid from "../component/Producs/ProductGrid";

const Product = () => {
  return (
    <div className="w-[90%] mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <ProductGrid />
    </div>
  );
};

export default Product;
