import React from "react";
import { useCartContext } from "../../context/cart";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const CartItem = ({ id, image, title, price, amount }) => {
  const { removeItem, decreaseItem, increaseItem } = useCartContext();
  return (
    <section className="flex items-center justify-between my-4">
      <div style={{ width: "200px", height: "200px" }}>
        <img
          className="h-full w-full object-cover border"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex-grow flex flex-col items-center text-blue-600 justify-center">
        <h1 className="md:text-xl text-blue-600">{title}</h1>
        <h1 className="text-blue-600">{price} €</h1>
        <div className="flex">
          <button
            className="px-2 md:text-xl text-lg font-bold"
            onClick={() => {
              decreaseItem(id);
            }}
          >
            <FaAngleLeft />
          </button>
          <h1 className="px-2 md:text-xl text-lg font-bold">{amount}</h1>
          <button
            className="px-2 md:text-xl text-lg font-bold"
            onClick={() => {
              increaseItem(id);
            }}
          >
            <FaAngleRight />
          </button>
        </div>
        <button
          className="text-red-500 tracking-widest hover:underline"
          onClick={() => {
            removeItem(id);
          }}
        >
          Entfernen
        </button>
      </div>
    </section>
  );
};
