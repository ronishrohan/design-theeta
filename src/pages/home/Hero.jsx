import { motion } from "motion/react";
import ac from "pixelarticons/svg/ac.svg"

const Hero = () => {
  return (
    <div className="h-[calc(100vh-60px)] overflow-hidden relative items-center justify-center text-6xl font-instrument-serif flex flex-col text-center px-4">
      {/* <div className="absolute bottom-0 w-full h-[50%] bg-white/5" >
        <div className="left-0 bottom-0 rotate-45 absolute  size-[10vw]" >
          <img src={ac} alt="" />
        </div>
      </div> */}
      <div className="z-20 relative flex items-center justify-center flex-col">
        <motion.div
          initial={{ opacity: 0, y: 5, scaleY: 0.8 }}
          animate={{ opacity: 1, y: 0, scaleY: 1 }}
          style={{ originY: "100%" }}
          className="text-[6vw]"
          transition={{ duration: 0.3, ease: "circInOut", delay: 0.15 }}
        >
          WE CREATE
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 5, scaleY: 0.8 }}
          animate={{ opacity: 1, y: 0, scaleY: 1 }}
          style={{ originY: "100%" }}
          transition={{ duration: 0.3, delay: 0.1, ease: "circInOut" }}
          className="text-[12vw] text-dt-yellow mb-0"
        >
          BRANDS
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: "circInOut" }}
          className="text-lg md:text-base font-rubik text-zinc-500 max-w-3xl mb-8"
        >
          Creative solutions, modern designs, and a touch of innovation.
        </motion.p>

        <motion.a
          href="#work"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="bg-dt-yellow font-rubik text-sm text-black px-4 py-2 rounded-lg font-semibold  hover:bg-yellow-500 transition-colors"
        >
          IM INTERESTED
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
