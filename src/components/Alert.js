import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};
const modalVariatns = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { type: "spring", stiffness: 100, duration: 1 }
  }
};

export const Alert = () => {
  return (
    <motion.section
      className="fixed grid place-items-center top-0 left-0 h-screen w-screen"
      style={{ background: "rgba(0,0,0,0.5)" }}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-red-200 p-6 rounded-md text-center"
        variants={modalVariatns}
      >
        <h1 className="text-red-700 font-mono">Warnung!</h1>
        <p>Dein Benutzername und/oder dein Passwort ist falsch.</p>
        <p>Versuche es erneut.</p>
      </motion.div>
    </motion.section>
  );
};
