import React from "react";
import { useProductContext } from "../../context/products";
import { Loader } from "../Loader";
import { Product } from "./Product";

export const FeaturedProducts = () => {
  const { loading, tab } = useProductContext();
  const featured = tab.filter((item) => item.featured === true);
  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:w-4/5 mx-auto my-4">
      {featured.map((album) => {
        return <Product key={album.id} {...album} />;
      })}
    </div>
  );
};
