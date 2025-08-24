import React, { useMemo } from "react";
import { motion } from "motion/react";

const Loader = ({ setLoaded }) => {
  const BOX_SIZE = 100;

  const { cols, rows } = useMemo(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      cols: Math.ceil(width / BOX_SIZE),
      rows: Math.ceil(height / BOX_SIZE),
    };
  }, []);

  const total = cols * rows;

  return (
    <div
      className="h-screen  w-screen fixed z-[10000] grid pointer-events-none"
      style={{
        gridTemplateColumns: `repeat(${cols}, ${BOX_SIZE}px)`,
        gridTemplateRows: `repeat(${rows}, ${BOX_SIZE}px)`,
      }}
    >
      {Array.from({ length: total }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            delay: 0.1 * (index % 5), // cascade effect
          }}
          className="bg-[#080808]"
          style={{
            width: BOX_SIZE,
            height: BOX_SIZE,
          }}
        />
      ))}
    </div>
  );
};

export default Loader;
