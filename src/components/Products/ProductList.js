import React from "react";
import { useProductContext } from "../../context/products";
import { Loader } from "../Loader";
import { Product } from "./Product";
import { motion } from "framer-motion";

const productVariants = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: {
    opacity: 1,
    y: "0",
    transition: {
      staggerChildren: 1,
      delayChildren: 1.5,
      duration: 0.5,
      type: "spring",
      stiffness: 100
    }
  }
};

export const ProductList = () => {
  const { loading, tab } = useProductContext();
  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <motion.div
      className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:w-4/5 mx-auto mt-4"
      variants={productVariants}
      initial="hidden"
      animate="visible"
    >
      {tab.map((album) => {
        return <Product key={album.id} {...album} />;
      })}
    </motion.div>
  );
};
