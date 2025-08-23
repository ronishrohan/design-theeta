import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const TitleAnimation = () => {
  const title = "DESIGN THEETA";
  const transition = { duration: 0.3 };
  return (
    <div className="absolute text-2xl font-rubik font-bold text-dt-yellow flex select-none">
      <div className="h-fit overflow-hidden flex leading-6">
        {title.split("").map((letter, index) =>
          letter === " " ? (
            <span key={index} className="w-2"></span>
          ) : (
            <motion.div
              key={index}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 0.4 + 0.01 * index, ...transition }}
            >
              {letter}
            </motion.div>
          )
        )}
      </div>
      <div className="h-fit overflow-hidden absolute flex leading-6">
        {title.split("").map((letter, index) =>
          letter === " " ? (
            <span key={index} className="w-2"></span>
          ) : (
            <motion.div
              key={index}
              initial={{ y: "0%" }}
              animate={{ y: "-100%" }}
              transition={{ delay: 0.4 + 0.01 * index, ...transition }}
            >
              {letter}
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

const NavButton = ({ children, open, delay }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: open ? 1 : 0 }}
      transition={{ type: "tween", duration: 0.2, delay: 0.2 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full relative h-[60px] flex items-center cursor-pointer"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ height: "0px" }}
            animate={{ height: "60px" }}
            exit={{ height: "0px" }}
            transition={{ type: "tween", duration: 0.1, ease: "easeInOut" }}
            className="absolute z-[100] size-full bg-dt-yellow overflow-hidden text-black flex items-center"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: open ? 1 : 0 }}
              transition={{ duration: 0.2, ease: "backInOut" }}
              className="mx-12 flex justify-between items-center w-full h-full"
            >
              {children}
              <ArrowRight className="mx-4" strokeWidth={3} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-[40px] flex items-center overflow-hidden relative">
        <motion.div
          initial={{ y: "-200%", scale: 1 }}
          animate={{ y: open ? "0%" : "-200%", scale: open ? 1 : 11 }}
          transition={{
            delay: 0.25 + 0.06 * delay,
            ease: "circInOut",
            duration: 0.6,
          }}
          className="mx-12 relative"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const lineVariants = {
    hover: { scaleX: 1.5 },
    rest: { scaleX: 1, width: "30px" },
  };

  const lineTransition = {
    type: "spring",
    stiffness: 1000,
    damping: 20,
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="z-40 fixed size-full bg-black/25"
          />
        )}
      </AnimatePresence>

      {/* Menu */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.6, ease: "circInOut" }}
            className={`h-fit top-[60px] w-full overflow-hidden fixed ${
              !menuOpen ? "bg-zinc-950" : "bg-zinc-900"
            } text-2xl z-50 font-rubik font-bold flex flex-col`}
          >
            {["HOME", "PROJECTS", "FAQS", "CONTACT"].map((item, index) => (
              <NavButton open={menuOpen} delay={index} key={index}>
                {item}
              </NavButton>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`h-[60px] z-[100] ${
          !menuOpen ? "bg-[#050505] delay-700" : "bg-zinc-900 delay-0"
        } transition-colors sticky px-12 top-0 w-full flex items-center`}
      >
        <AnimatePresence mode="wait">
          <TitleAnimation key={menuOpen + "test"} />
        </AnimatePresence>

        <div className="ml-auto h-full w-fit flex gap-4">
          <motion.button
            onClick={() => setMenuOpen((prev) => !prev)}
            initial="rest"
            whileHover="hover"
            animate={menuOpen ? "hover" : "rest"}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer h-full aspect-square shrink-0 flex flex-col items-center justify-center gap-1"
          >
            <motion.div className="size-full px-3 flex flex-col items-center justify-center gap-1">
              <motion.div
                transition={{ ...lineTransition, delay: 0.01 }}
                variants={lineVariants}
                className="h-[2px] rounded-full bg-dt-yellow"
              />
              <motion.div
                transition={{ ...lineTransition, delay: 0.03 }}
                variants={lineVariants}
                className="h-[2px] rounded-full bg-dt-yellow"
              />
              <motion.div
                transition={{ ...lineTransition, delay: 0.05 }}
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
