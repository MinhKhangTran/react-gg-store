import React from "react";
import { useProductContext } from "../../context/products";
import { Loader } from "../Loader";
import { Product } from "./Product";

export const ProductList = () => {
  const { loading, tab } = useProductContext();
  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:w-4/5 mx-auto mt-4">
      {tab.map((album) => {
        return <Product key={album.id} {...album} />;
      })}
    </div>
  );
};
