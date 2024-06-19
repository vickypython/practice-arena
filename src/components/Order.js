import React from "react";
import "../App.css";
import { motion } from "framer-motion";
const loaderVariants = {
  animationOne: {
    x: [0, 40],
    y: [0],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
      },
    },
  },
};
const Order = () => {
  return (
    <div className="container">
      <h1>loader</h1>
      <motion.div
        variants={loaderVariants}
        animate="animationOne"
        className="loader"
      >
      </motion.div>
    </div>
  );
};
export default Order;
