import React from "react";
import { motion } from "motion/react";

import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { clipPath } from "motion/react-client";

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
  return (
    <div className="w-full h-fit flex flex-col">
      <div className="bg-[#350b3d] w-full text-white font-instrument-serif font-light h-[200px] flex flex-col gap-2 items-center justify-center text-3xl ">
        <div>Let us maximize your brand's potential</div>
        <motion.div
          initial={{}}
          whileTap={{ scale: 0.9 }}
          whileHover={{ rotateZ: "-5deg" }}
          className="font-sans text-base bg-white/10 px-4 py-2 flex items-center justify-center mt-6 rounded-sm select-none cursor-pointer font-medium hover:bg-white/20"
        >
          KNOW MORE
        </motion.div>
      </div>
      <div className="flex pt-[80px] px-4 w-full h-fit gap-12 items-stretch">
        <div className=" w-2/3 shrink-0 flex flex-col ">
          <div className="font-rubik  font-bold tracking-tighter text-3xl text-dt-yellow">
            DESIGN THEETA
          </div>
          <div className="text-white font-rubik mt-4">
            We educate people about their brand stories, identity, design and
            business. Through creative excellence, we transform brands into
            sustainable success stories that inspire customers and employees
            alike.
          </div>
        </div>
        <div className="w-1/2 flex flex-col  items-end gap-4">
          <div className="flex w-full gap-4 h-[40px] justify-end">
            {footerLinks.map(({ href, icon: Icon, label }) => (
              <motion.button
                whileHover="hover"
                variants={{ hover: { scale: 1.1 } }}
                key={label}
                onClick={() => window.open(href, "_blank")}
                className="h-full w-full cursor-pointer rounded-lg overflow-hidden  flex items-center justify-center relative"
                aria-label={label}
              >
                <motion.div
                  initial={{ height: "0px", width: "0px" }}
                  variants={{ hover: { height: "40px", width: "100px" } }}
                  transition={{ duration: 0.1 }}
                  className={`size-full bg-dt-yellow absolute rounded-lg flex items-center justify-center overflow-hidden`}
                >
                  <Icon size={20} className="text-black" />
                </motion.div>
                <Icon size={20} className="text-dt-yellow" />
              </motion.button>
            ))}
          </div>
          <motion.div
            whileHover="hover"
            className="w-full py-4 text-black font-bold tracking-tighter text-2xl flex overflow-hidden border-2 border-black items-center relative justify-center bg-dt-yellow rounded-lg cursor-pointer"
          >
            <motion.div
              initial={{
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              }}
              variants={{
                hover: {
                  clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                },
              }}
              transition={{ duration: 0.3, ease: "circInOut"}}
              className="bg-black pointer-events-none !cursor-pointer text-dt-yellow absolute size-full flex items-center justify-center"
            >
              CONTACT US
            </motion.div>
            CONTACT US
          </motion.div>
        </div>
      </div>
      <div className="w-full h-fit p-4 mt-12 font-rubik text-base text-zinc-500">
        Copyright © 2025 Design Theeta. All rights reserved. Design Theeta Pvt.
        Ltd., CIN: U12345KA2025PTC123456. Registered in Bangalore, Karnataka,
        India. #42, MG Road, Bangalore – 560001. GSTIN: 29ABCDE1234F1Z5.
      </div>
    </div>
  );
};
