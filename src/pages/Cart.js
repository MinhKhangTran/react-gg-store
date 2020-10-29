import React from "react";
import { useCartContext } from "../context/cart";
import { useUserContext } from "../context/user";
import { EmptyCart, CartItem } from "../components/Cart";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const containerVariantes = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: "0",
    transition: { duration: 0.7, type: "spring", stiffness: 50 }
  },
  exit: { opacity: 0, x: "-100vw" }
};

export const Cart = () => {
  const { cart, total, clearCart } = useCartContext();
  const { user } = useUserContext();
  return cart.length === 0 ? (
    <div>
      <EmptyCart />
    </div>
  ) : (
    <motion.article
      className="grid place-items-center md:w-1/2 mx-auto w-11/12"
      variants={containerVariantes}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
        {user.token && cart.length > 0 ? (
          <div className="flex justify-center my-4">
            <Link to="/">
              <button className="bg-blue-500 text-xl px-3 text-blue-100 rounded py-1 hover:bg-blue-700 transition transition-all duration-300 ease-in-out">
                Checkout
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex justify-center my-4">
            <Link to="/login">
              <button className="bg-blue-500 text-xl px-3 text-blue-100 rounded py-1 hover:bg-blue-700 transition transition-all duration-300 ease-in-out">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </motion.article>
  );
};
