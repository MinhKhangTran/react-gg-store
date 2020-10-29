import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user";
import { useCartContext } from "../context/cart";

export const LoginLink = ({ toggle, setToggle }) => {
  const { clearCart } = useCartContext();
  const { user, userLogout } = useUserContext();
  return user.token ? (
    <button
      onClick={() => {
        userLogout();
        clearCart();
        setToggle(!toggle);
      }}
    >
      Logout
    </button>
  ) : (
    <button
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <Link to="login">Login</Link>
    </button>
  );
};
