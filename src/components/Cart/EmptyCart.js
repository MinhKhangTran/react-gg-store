import React from "react";
import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <div className="h-screen w-screen grid place-items-center">
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-blue-700 text-2xl font-mono font-bold mt-4 mb-6">
          Dein Einkaufswagen ist im Moment leer
        </h1>
        <Link
          to="/products"
          className="bg-blue-500 text-xl px-3 text-blue-100 rounded py-1 hover:bg-blue-700 transition transition-all duration-300 ease-in-out"
        >
          Lass es uns auffüllen!
        </Link>
      </div>
    </div>
  );
};
