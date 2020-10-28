import React from "react";
import url from "../utils/URL";
export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [tab, setTab] = React.useState([]);

  const fetchAlbums = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTab(data);
    setLoading(false);
    // console.log(tab[value].abumName);
  };
  React.useEffect(() => {
    fetchAlbums();
  }, []);
  // React.useEffect(() => {
  //   if (value > tab.length - 1) {
  //     setValue(0);
  //   }
  //   if (value < 0) {
  //     setValue(tab.length - 1);
  //   }
  // }, [value, tab]);
  // React.useEffect(() => {
  //   let timeout = setInterval(() => {
  //     const randomNumber = Math.floor(Math.random * tab.length);
  //     setValue(randomNumber);
  //   }, 3000);
  //   return () => {
  //     clearInterval(timeout);
  //   };
  // }, [value]);
  return (
    <ProductContext.Provider
      value={{ value, loading, tab, setValue, fetchAlbums }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return React.useContext(ProductContext);
};
