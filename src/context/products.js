import React from "react";
import url from "../utils/URL";
import axios from "axios";
export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [tab, setTab] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const newUrl = `${url}/albums`;
  // const fetchAlbums = async () => {
  //   const response = await fetch(`${url}/albums`);
  //   const data = await response.json();
  //   setTab(data);
  //   setLoading(false);
  // console.log(tab[value].abumName);
  // };
  // filter by search

  React.useEffect(() => {
    // fetchAlbums();
    axios.get(newUrl).then((response) => {
      const products = response.data;
      setTab(products);
      setLoading(false);
    });
    return () => {};
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
  React.useEffect(() => {
    console.log("it worked");

    // console.log(tab);

    let newProducts = [...tab].sort((a, b) => a.name - b.name);

    if (search !== "") {
      newProducts = newProducts.filter((item) => {
        let title = item.name.toLowerCase().trim();
        return title.startsWith(search) ? item : null;
      });
    }
    setTab(newProducts);
  }, [search]);

  const sortedAZ = () => {
    console.log("jo");
    console.log(tab);

    setTab([...tab].sort((a, b) => a.id - b.id));
  };
  const sortedZA = () => {
    console.log("jo");
    console.log(tab);

    setTab([...tab].sort((a, b) => b.id - a.id));
  };
  return (
    <ProductContext.Provider
      value={{
        value,
        loading,
        tab,
        setTab,
        setValue,
        // fetchAlbums,
        search,
        setSearch,
        sortedAZ,
        sortedZA
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return React.useContext(ProductContext);
};
