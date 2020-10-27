import React from "react";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  return <ProductContext.Provider>{children}</ProductContext.Provider>;
};

export const useGlobalContext = () => {
  return React.useContext(ProductContext);
};
