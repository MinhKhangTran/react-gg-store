import React from "react";
import { ProductList } from "../components/Products/ProductList";
import { motion } from "framer-motion";
import { Filters } from "../components/Products/Filters";

const containerVariantes = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, type: "spring", stiffness: 50 }
  },
  exit: { opacity: 0, x: "-100vw" }
};

export const Products = () => {
  return (
    <motion.section
      className="text-blue-600 text-xl font-semibold text-center mt-8"
      variants={containerVariantes}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="underline">Unsere aktuellen Alben</h1>
      <Filters />
      <ProductList />
    </motion.section>
  );
};
