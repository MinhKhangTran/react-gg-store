import React from "react";

import { Loader } from "../components/Loader";
import { useProductContext } from "../context/products";
import { FeaturedProducts } from "../components/Products/FeaturedProducts";
import { motion } from "framer-motion";

const containerVariantes = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: { duration: 0.7, type: "spring", stiffness: 50 }
  },
  exit: { opacity: 0 }
};

export const Home = () => {
  const { loading, tab, value, setValue } = useProductContext();
  if (loading) {
    return <Loader />;
  }

  const { name, abumName } = tab[value];
  const { name: image } = tab[value].images[2];
  return (
    <motion.div
      variants={containerVariantes}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="bg-blue-300 py-8 h-screen grid place-items-center">
        <section className="bg-blue-300 flex w-11/12 md:w-2/3 mx-auto justify-between mb-8 flex-wrap md:flex-no-wrap">
          <div className="flex md:flex-col justify-center md:leading-10 text-blue-600 font-semibold md:text-2xl flex-wrap md:flex-no-wrap">
            {tab.map((band, index) => {
              return (
                <button
                  key={band.id}
                  className={`${
                    index === value
                      ? "mx-4 md:mx-0 my-2 font-bold underline text-blue-700 "
                      : "mx-4 md:mx-0 my-2 font-semibold"
                  }`}
                  onClick={() => {
                    setValue(index);
                  }}
                >
                  {band.name}
                </button>
              );
            })}
          </div>
          <div className="text-center mx-auto">
            <div
              style={{ maxWidth: "500px", maxheight: "500px" }}
              className="text-center"
            >
              <img
                className="mt-4 mb:mt-0 md:h-full md:w-full h-64 w-64 mx-auto object-cover object-top"
                src={image}
                alt={name}
              />
            </div>
            <h1 className="md:text-xl text-blue-600 font-semibold mt-2 mb:mt-0">
              {name}
            </h1>
            <h1 className="md:text-xl text-blue-600 font-semibold  mb:mt-0">
              {abumName}
            </h1>
          </div>
        </section>
      </div>
      <h1 className="text-blue-600 text-2xl font-semibold text-center mt-4 underline">
        Unsere Bestseller!
      </h1>
      <FeaturedProducts />
    </motion.div>
  );
};
