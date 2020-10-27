import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="h-screen w-screen grid place-items-center">
      <div className="text-center flex flex-col justify-center items-center">
        <img
          className=""
          width={"350px"}
          src="https://cdn130.picsart.com/318299147372211.png?type=webp&to=min&r=640"
          alt="tanjiro dumb face"
        />
        <h1 className="text-blue-700 text-2xl font-mono font-bold mt-4 mb-6">
          Sorry, hier gibt es nichts
        </h1>
        <Link
          to="/"
          className="bg-blue-500 text-xl px-3 text-blue-100 rounded py-1 hover:bg-blue-700 transition transition-all duration-300 ease-in-out"
        >
          Zurück zur Homepage
        </Link>
      </div>
    </div>
  );
};
