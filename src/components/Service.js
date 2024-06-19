import React from "react";
import "../App.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const containerVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1.5, type: "spring", stiffness: 500 },
  },
};
const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
};
const Service = () => {
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 5000);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="service"
    >
      <AnimatePresence>
        <motion.div className="title">
          {showTitle && <motion.h2 exit={{ y: -1000 }}>My Service</motion.h2>}
        </motion.div>
      </AnimatePresence>

      <div className="box">
        <div className="card">
          <i className="far fa-bars"></i>
          <h5>Web Development</h5>
          <div className="pra">
            <p>
              Every website should be build with two primary goal:Firstly,it
              needs to work across all devices. Secondly,it to be fast as
              possible.
            </p>
            <p className="text-align: center">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="button"
                href="./READ"
              >
                Read More
              </motion.button>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
