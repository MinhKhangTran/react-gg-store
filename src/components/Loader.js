import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  animation: {
    x: [-50, 50],
    transition: { yoyo: Infinity, duration: 0.75, ease: "easeInOut" }
  }
};

export const Loader = () => {
  return (
    <section className="flex justify-center">
      <motion.div
        className="h-6 w-6 rounded-full bg-red-400 text-center"
        variants={loaderVariants}
        animate="animation"
      ></motion.div>
    </section>
  );
};
