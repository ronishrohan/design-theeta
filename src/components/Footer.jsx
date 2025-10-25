import { useSpring, useTransform } from "motion/react";

import { useLenis } from "lenis/react";
import { motion, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo (10).svg";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const ref = useRef();
  const lenis = useLenis();
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollYProgress: yProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const heightContent = useTransform(yProgress, [0, 1], ["0%", "100%"]);
  const yContent = useSpring(useTransform(yProgress, [0, 1], ["-40%", "0%"]), {
    damping: 100,
    stiffness: 500,
  });

  const handleNavigation = (section) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first then scroll
      navigate("/");
      setTimeout(() => {
        if (lenis && section !== "HOME") {
          const target = section.toLowerCase();
          const element = document.getElementById(
            target === "work" ? "work" : target === "about" ? "home" : target,
          );
          if (element) {
            lenis.scrollTo(element, { duration: 1.2 });
          }
        } else if (lenis && section === "HOME") {
          lenis.scrollTo(0, { duration: 1.2 });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      if (lenis) {
        if (section === "HOME") {
          lenis.scrollTo(0, { duration: 1.2 });
        } else {
          const target = section.toLowerCase();
          const element = document.getElementById(
            target === "work" ? "work" : target === "about" ? "home" : target,
          );
          if (element) {
            lenis.scrollTo(element, { duration: 1.2 });
          }
        }
      }
    }
  };

  return (
    <div className="w-full  h-fit flex flex-col">
      <div className="bg-[#050505] w-full text-white font-rubik font-bold h-[50vh] flex flex-col gap-2 items-center justify-center text-2xl ">
        <div>INTERESTED TO WORK WITH US?</div>
        <div className="h-fit w-[40vw] mt-5 focus-within:border-dt-yellow border-4 rounded-xl border-stone-800">
          <input
            onChange={(e) => setEmail(e.target.value.toUpperCase())}
            value={email}
            type="text"
            className="size-full border-none outline-none px-12 py-6"
            placeholder="NAME@DOMAIN.COM"
          />
        </div>
      </div>

      <div ref={ref} className="h-[90vh] bg-black  relative ">
        <motion.div
          style={{ height: heightContent }}
          className=" relative w-full overflow-hidden bg-black"
        >
          <div className="h-[20vh] pointer-events-none w-full absolute top-0 left-0 bg-gradient-to-b from-black to-transparent z-40"></div>
          <motion.div
            style={{ y: yContent }}
            className="flex h-[90vh] bg-black w-full  gap-12 items-stretch absolute size-full overflow-hidden"
          >
            <div className="size-full flex items-center">
              <div className="w-2/5 px-12 *:w-fit leading-[6vw] text-[5vw] font-rubik min-h-[40vh] flex flex-col h-fit ">
                <div
                  className="cursor-pointer hover:text-dt-yellow hover:font-black transition-all duration-100 ease-in-out"
                  onClick={() => handleNavigation("HOME")}
                >
                  HOME
                </div>
                <div
                  className="cursor-pointer hover:text-dt-yellow hover:font-black transition-all duration-100 ease-in-out"
                  onClick={() => handleNavigation("ABOUT")}
                >
                  ABOUT
                </div>
                <div
                  className="cursor-pointer hover:text-dt-yellow hover:font-black transition-all duration-100 ease-in-out"
                  onClick={() => handleNavigation("WORK")}
                >
                  WORK
                </div>
                <div
                  className="cursor-pointer hover:text-dt-yellow hover:font-black transition-all duration-100 ease-in-out"
                  onClick={() => handleNavigation("SERVICES")}
                >
                  SERVICES
                </div>
              </div>
              <div className="w-3/5 pr-12 h-[40vh] text-[1.5vw] text-stone-400 font-medium grid  font-rubik grid-cols-2 grid-rows-2 gap-4">
                <div className="size-full flex flex-col  justify-start gap-1">
                  <div className="font-semibold text-white mb-4">CONTACT</div>
                  <div>{"thedesigntheeta@gmail.com".toUpperCase()}</div>
                  <div>+91 9125125952</div>
                </div>
                <div className="size-full flex flex-col  justify-start gap-1">
                  <div className="font-semibold text-white mb-4">SOCIAL</div>
                  <a
                    href="https://www.instagram.com/designtheeta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-dt-yellow transition-colors cursor-pointer"
                  >
                    INSTAGRAM
                  </a>
                  <a
                    href="https://www.youtube.com/@designtheeta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-dt-yellow transition-colors cursor-pointer"
                  >
                    YOUTUBE
                  </a>
                </div>
                <div className="size-full flex flex-col  justify-start gap-1">
                  <div className="font-semibold text-white mb-4">ADDRESS</div>
                  <div>123, 2ND CROSS</div>
                  <div>WHITEFIELD</div>
                  <div>BENGALURU 560094</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        // style={{ y: yContent }}
        // style={{y: yContent}}
        style={{ opacity: yProgress }}
        className="w-full border-t border-stone-800 bg-[#020202] h-[15vh] items-center overflow-hidden  flex font-rubik text-sm text-stone-500 justify-between relative"
      >
        <div className="mx-12 text-[1.5vw]">
          {"Copyright © 2025 Design Theeta".toUpperCase()}
        </div>
        <div>
          <div className="overflow-hidden relative h-[15vh] w-[7vw] mx-12">
            <img
              className="h-[15vh]  absolute top-1/2 -translate-y-1/2"
              src={Logo}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
