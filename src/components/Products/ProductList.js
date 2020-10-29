import React from "react";
import { useProductContext } from "../../context/products";
import { Loader } from "../Loader";
import { Product } from "./Product";
import { motion } from "framer-motion";

const containerVariats = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: {
    opacity: 1,
    y: "0",
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 50,
      staggerChildren: 0.4,

      when: "beforeChildren"
    }
  },
  exit: { opacity: 0 }
};
const productVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1
  }
};

export const ProductList = () => {
  const { loading, tab } = useProductContext();
  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <motion.div variants={containerVariats} initial="hidden" animate="visible">
      <motion.div
        className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:w-4/5 mx-auto mt-4"
        variants={productVariants}
      >
        {tab.map((album) => {
          return <Product key={album.id} {...album} />;
        })}
      </motion.div>
    </motion.div>
  );
};
