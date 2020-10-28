import React from "react";
import { ProductList } from "../components/Products/ProductList";

export const Products = () => {
  return (
    <section className="text-blue-600 text-xl font-semibold text-center mt-8">
      <h1 className="underline">Unsere aktuellen Alben</h1>
      <ProductList />
    </section>
  );
};
