import React from "react";
import { motion } from "motion/react";

const Reviews = () => {
  return (
    <div className="h-screen w-full flex py-12">
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{damping: 20, stiffness: 700, type: "spring"}}
        className="text-white h-fit shrink-0 z-20 px-6 md:px-12 text-5xl font-bold font-rubik mb-12"
      >
        REVIEWS BY CUSTOMERS
      </motion.div>
    </div>
  );
};

export default Reviews;
