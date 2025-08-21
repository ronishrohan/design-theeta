import { motion, useSpring, useTransform } from "motion/react";

import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Logo from "../assets/images/logo (2).svg";
import SimpleWave from "./ui/Wave";
import { useScroll } from "motion/react";
import { useRef } from "react";
const footerLinks = [
  {
    href: "https://www.instagram.com/designtheeta/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://twitter.com/designtheeta",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://www.linkedin.com/company/designtheeta/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:hello@designtheeta.com",
    icon: Mail,
    label: "Mail",
  },
];

export const Footer = () => {
  const ref = useRef();
  const { scrollYProgress: yProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const heightContent = useTransform(yProgress, [0, 1], ["0%", "100%"]);
  const yContent = useTransform(yProgress, [0, 1], ["-30%", "0%"]);
  return (
    <div className="w-full  h-fit flex flex-col">
      <div className="bg-zinc-900 w-full text-white font-instrument-serif font-light h-[50vh] flex flex-col gap-2 items-center justify-center text-3xl ">
        <div>Let us maximize your brand's potential</div>
        <motion.div
          initial={{}}
          whileTap={{ scale: 0.9 }}
          whileHover={{ rotateZ: "-5deg" }}
          className="font-sans text-base bg-white/10 px-4 py-2 flex items-center justify-center mt-6 rounded-sm select-none cursor-pointer font-medium hover:bg-white/20 mb-[10vh]"
        >
          KNOW MORE
        </motion.div>
      </div>

      <div ref={ref} className="h-[90vh] bg-[#f4a20e]  relative ">
        
        <motion.div
          style={{ height: heightContent }}
          className=" relative w-full overflow-hidden bg-[#f4a20e]"
        >
          <motion.div
            style={{ y: yContent }}
            className="flex h-[90vh] bg-[#f4a20e] px-12 w-full  gap-12 items-stretch absolute size-full overflow-hidden pt-[60px] "
          >
            <div className=" w-full shrink-0 flex flex-col ">
              <div className="overflow-hidden relative h-[25vh] w-[50vh]">
                <img
                  className="h-[80vh] translate-x-[-5vh] absolute top-1/2 -translate-y-1/2"
                  src={Logo}
                />
              </div>
              <div className="text-black font-bold font-rubik mt-4">
                We educate people about their brand stories, identity, design
                and business. Through creative excellence, we transform brands
                into sustainable success stories that inspire customers and
                employees alike.
              </div>
              
            </div>
            
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full h-fit bg-[#020202] p-4  font-rubik text-sm text-zinc-500 ">
        Copyright © 2025 Design Theeta - All rights reserved
      </div>
    </div>
  );
};
