import React from "react";
import { reducer } from "./reducer";
import localCart from "../utils/localCart";
export const CartContext = React.createContext();

const initState = {
  cart: localCart,
  total: 0,
  amount: 0
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initState);
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increaseItem = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  React.useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return React.useContext(CartContext);
};
