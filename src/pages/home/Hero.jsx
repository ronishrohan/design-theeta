import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-60px)] overflow-hidden relative items-center justify-center text-6xl font-instrument-serif flex flex-col text-center px-4">
      <div className="z-20 relative flex items-center justify-center flex-col shadow-2xl shadow-zinc-950">
        
        <motion.div
          initial={{ opacity: 0, y: 5, scaleY: 0.8 }}
          animate={{ opacity: 1, y: 0, scaleY: 1 }}
          style={{ originY: "100%" }}
          transition={{ duration: 0.3, ease: "circInOut", delay: 0.15 }}
        >
          WE CREATE
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 5, scaleY: 0.8 }}
          animate={{ opacity: 1, y: 0, scaleY: 1 }}
          style={{ originY: "100%" }}
          transition={{ duration: 0.3, delay: 0.1, ease: "circInOut" }}
          className="text-9xl text-dt-yellow mb-6"
        >
          BRANDS
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="text-lg md:text-xl font-rubik text-zinc-300 max-w-3xl mb-8"
        >
          Creative solutions, modern designs, and a touch of innovation.
        </motion.p>

        <motion.a
          href="#work"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="bg-dt-yellow text-black px-4 py-2 rounded-lg font-semibold text-3xl hover:bg-yellow-500 transition-colors"

        >
          Explore Our Work
        </motion.a>

      </div>
    </div>
  );
};

export default Hero;
