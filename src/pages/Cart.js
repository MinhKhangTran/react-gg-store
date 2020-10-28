import React from "react";
import { useCartContext } from "../context/cart";
import { EmptyCart, CartItem } from "../components/Cart";

export const Cart = () => {
  const { cart, total, clearCart } = useCartContext();
  return cart.length === 0 ? (
    <div>
      <EmptyCart />
    </div>
  ) : (
    <article className="grid place-items-center md:w-1/2 mx-auto w-11/12">
      <div className="w-full">
        <h1 className="text-blue-600 text-2xl underline mt-8 text-center">
          Einkaufswagen
        </h1>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <div className="flex justify-between text-blue-600 text-xl font-mono border-t-4 border-blue-600">
          <h1>Total:</h1>
          <h1>{total}</h1>
        </div>
        <div className="flex justify-center mt-2">
          <button
            onClick={clearCart}
            className="bg-blue-500 text-xl px-3 text-blue-100 rounded py-1 hover:bg-blue-700 transition transition-all duration-300 ease-in-out"
          >
            Alles löschen
          </button>
        </div>
      </div>
    </article>
  );
};
