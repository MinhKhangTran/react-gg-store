import React from "react";
import { Link } from "react-router-dom";

export const Product = ({ id, name, abumName, images }) => {
  return (
    <article className="w-11/12 mx-auto">
      <div className="flex">
        <div style={{ width: "150px", height: "150px" }}>
          <img
            className="w-full h-full object-cover"
            src={images[0].name}
            alt={name}
          />
        </div>
        <div className="flex flex-col justify-center flex-grow items-center text-center">
          <h1>{name}</h1>
          <h2>{abumName}</h2>
          <Link to={`/products/${id}`}>
            <button className="mt-4 bg-blue-500 text-lg px-2 text-blue-100 rounded py-1 hover:bg-blue-700 transition transition-all duration-300 ease-in-out inline-block">
              Details
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};
