import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-60px)] overflow-hidden relative items-center justify-center text-6xl font-instrument-serif flex flex-col">
      <div className="z-20 relative flex items-center justify-center flex-col shadow-2xl shadow-zinc-950">
        {" "}
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
          className="text-9xl text-dt-yellow mb-20"
        >
          BRANDS
        </motion.div>
      </div>
      {/* <div className="size-[500px] blur-2xl rounded-full bg-zinc-950 absolute z-10" ></div> */}
    </div>
  );
};

export default Hero;
