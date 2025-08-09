import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";


const NavButton = ({ children, open, delay }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: open && 1 }}
        transition={{ type: "tween", duration: 0.2, delay: 0.2 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-full relative h-[50px] flex items-center cursor-pointer"
      >
        <AnimatePresence>
          {hovered && (
            <>
              <motion.div
                initial={{ height: "0px" }}
                animate={{ height: "50px" }}
                exit={{ height: "0px" }}
                transition={{ type: "tween", duration: 0.1, ease: "easeInOut" }}
                className="absolute z-[100] size-full bg-dt-yellow overflow-hidden  text-black flex items-center"
              >
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: open ? 1 : 0 }}
                  transition={{duration: 0.2, ease: "backInOut"}}
                  className="mx-4 flex justify-between items-center w-full h-full"
                >
                    
                  {children}
          <ArrowRight strokeWidth={3}></ArrowRight>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <div className="h-[40px] flex items-center overflow-hidden relative">
            <motion.div
          initial={{ y: "-200%", scale: 1 }}
          animate={{ y: open ? "0%" : "-200%", scale: open ? 1 : 11 }}
          transition={{ delay: 0.25 + 0.06 * delay, ease: "circInOut", duration: 0.6 }}
          className="mx-4 relative"
        >
          {children}

        </motion.div>
        </div>
      </motion.div>
    </>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const lineVariants = {
    hover: {
      scaleX: 1.5,
    },
    rest: {
      scaleX: 1,
      width: "30px",
    },
  };
  const lineTranstion = {
    type: "spring",
    stiffness: 1000,
    damping: 20,
  };
  return (
    <>
    <AnimatePresence>
        {menuOpen && <>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} onClick={() => setMenuOpen(false)} className="z-10 fixed size-full bg-black/25" ></motion.div></>}
    </AnimatePresence>
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.6, ease: "circInOut" }}
            className={`h-fit top-[52px] w-full overflow-hidden min-h-0 fixed ${
              !menuOpen ? "bg-zinc-950" : "bg-zinc-900"
            }  text-2xl z-50 font-rubik font-bold flex flex-col`}
          >
            {["HOME", "PROJECTS", "FAQS", "CONTACT"].map((item, index) => (
              <NavButton open={menuOpen} delay={ index} key={index}>
                {item}
              </NavButton>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
      
        className={`h-[52px] z-[100] ${
          !menuOpen ? "bg-zinc-950 delay-700" : "bg-zinc-900 delay-0" 
        } transition-colors sticky top-0 w-full flex  items-center `}
      >
        <div className="mx-4 text-2xl font-rubik font-bold text-dt-yellow">
          DESIGN THEETA
        </div>
        <div className="ml-auto mr-4 h-full w-fit flex gap-4">
          <motion.button
            onClick={() => setMenuOpen((prev) => !prev)}
            initial="rest"
            whileHover="hover"
            animate={menuOpen ? "hover" : "rest"}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer h-full aspect-square px-3 shrink-0 flex flex-col items-center justify-center gap-1"
          >
            <motion.div
              initial="rest"
              whileHover="hover"
              className="size-full flex flex-col items-center justify-center gap-1"
            >
              <motion.div
                transition={{ ...lineTranstion, delay: 0.01 }}
                variants={lineVariants}
                className="h-[2px] rounded-full bg-dt-yellow"
              />
              <motion.div
                transition={{ ...lineTranstion, delay: 0.03 }}
                variants={lineVariants}
                className="h-[2px] rounded-full bg-dt-yellow"
              />
              <motion.div
                transition={{ ...lineTranstion, delay: 0.05 }}
                variants={lineVariants}
                className="h-[2px] rounded-full bg-dt-yellow"
              />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
