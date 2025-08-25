import React from "react";
import { motion } from "motion/react";
const Services = () => {
  const images = [
    {
      src: "https://i.pinimg.com/736x/14/51/6d/14516d3436422c5c9d3a85e85b95b22a.jpg",
      delay: 0.1,
    },
    {
      src: "https://i.pinimg.com/736x/26/6e/17/266e172adbccd372a1185f65014c3dbe.jpg",
      delay: 0.14,
    },
    {
      src: "https://i.pinimg.com/736x/c7/ce/fe/c7cefe56190184bc20711bc832fa39b8.jpg",
      delay: 0.2,
    },
    {
      src: "https://i.pinimg.com/736x/df/5b/1b/df5b1b1b236a7c9d6849d32e2ccf9301.jpg",
      delay: 0.24,
    },
  ];

  const websites = [
    {
      src: "https://i.pinimg.com/736x/14/51/6d/14516d3436422c5c9d3a85e85b95b22a.jpg",
      delay: 0.1,
    },
    {
      src: "https://i.pinimg.com/736x/26/6e/17/266e172adbccd372a1185f65014c3dbe.jpg",
      delay: 0.14,
    },
    {
      src: "https://i.pinimg.com/736x/c7/ce/fe/c7cefe56190184bc20711bc832fa39b8.jpg",
      delay: 0.2,
    },
    {
      src: "https://i.pinimg.com/736x/e0/c8/7e/e0c87eb75f48138a26c16d24c3c8497f.jpg",
      delay: 0.241,
    },
  ]
  const videos = [
    {
      src: "https://i.pinimg.com/736x/14/51/6d/14516d3436422c5c9d3a85e85b95b22a.jpg",
      delay: 0.1,
    },
    {
      src: "https://i.pinimg.com/736x/26/6e/17/266e172adbccd372a1185f65014c3dbe.jpg",
      delay: 0.15,
    },
    {
      src: "https://i.pinimg.com/736x/c7/ce/fe/c7cefe56190184bc20711bc832fa39b8.jpg",
      delay: 0.2,
    },
    {
      src: "https://i.pinimg.com/736x/10/d1/99/10d199d5dde40ebcee01dd779a53037d.jpg",
      delay: 0.24,
    },
  ]
  return (
    <div className="flex flex-col py-12 h-dvh">
      <div className="text-white shrink-0 z-20  px-6  md:px-12 text-5xl font-bold font-rubik mb-12">
        SERVICES WE OFFER
      </div>
      <div className="h-full gap-4  grid grid-cols-3 px-12">
        <motion.div
          whileHover={"hover"}
          className="size-full group rounded-sm relative transition-colors hover:bg-red-600/50 bg-red-600/20"
        >
          <div className="relative size-full  left-0 top-0 overflow-hidden rounded-sm brightness-75">
            {images.map((img, idx) => (
              <motion.img
                key={idx}
                initial={{
                  scale: 0,
                  opacity: 1,
                  y: "0%"
                //   transition: { duration: Math.random() + 0.2, ease: "circInOut" },
                }}
                variants={{
                  hover: {
                    scale: 1,
                    opacity: 1,
                    y: "0%"
                    // transition: {duration: img.delay * 2}
                  },
                }}
                transition={{ ease: "circInOut", duration: img.delay * 4}}
                className={`absolute  size-full object-cover rounded-sm z-[${
                  idx + 1
                }]`}
                src={img.src}
                alt={`image-${idx}`}
              />
            ))}
          </div>
          <motion.div className="absolute bottom-0 bg-transparent opacity:100 group-hover:opacity-0 transition-all text-left w-full p-4 text-2xl font-bold z-30">
            
            GRAPHIC DESIGN
          </motion.div>
        </motion.div>
        <motion.div whileHover={"hover"} className="size-full group rounded-sm relative bg-green-600/20 hover:bg-green-600/50 transition-colors">
        <div className="relative size-full  left-0 top-0 overflow-hidden rounded-sm brightness-75">
            {videos.map((img, idx) => (
              <motion.img
                key={idx}
                initial={{
                  scale: 1,
                  opacity: 1,
                  rotateZ: "90deg"
                //   transition: { duration: Math.random() + 0.2, ease: "circInOut" },
                }}
                variants={{
                  hover: {
                    scale: 1,
                    opacity: 1,

                    rotateZ: "0deg"
                    // transition: {duration: img.delay * 2}
                  },
                }}
                style={{transformOrigin: "bottom left"}}
                transition={{ ease: "circInOut", duration: img.delay * 4 }}
                className={`absolute  size-full object-cover  rounded-sm z-[${
                  idx + 1
                }]`}
                src={img.src}
                alt={`image-${idx}`}
              />
            ))}
          </div>
          <div className="absolute bottom-0 bg-transparent opacity:100 group-hover:opacity-0 transition-all text-left w-full p-4 text-2xl font-bold z-30">
            VIDEO EDITING
          </div>
        </motion.div>
        <motion.div whileHover={"hover"} className="size-full group rounded-sm relative transition-colors bg-yellow-600/20 hover:bg-yellow-600/50">
        <div className="relative size-full  left-0 top-0 overflow-hidden rounded-sm brightness-75">
            {websites.map((img, idx) => (
              <motion.img
                key={idx}
                initial={{
                  scale: 1,
                  opacity: 1,
                  y: "100%"
                //   transition: { duration: Math.random() + 0.2, ease: "circInOut" },
                }}
                variants={{
                  hover: {
                    scale: 1,
                    opacity: 1,
                    y: "0%"
                    // transition: {duration: img.delay * 2}
                  },
                }}
                transition={{ ease: "circInOut", duration: img.delay * 4 }}
                className={`absolute  size-full object-cover rounded-sm z-[${
                  idx + 1
                }]`}
                src={img.src}
                alt={`image-${idx}`}
              />
            ))}
          </div>
          <div className="absolute bottom-0 bg-transparent opacity:100 group-hover:opacity-0 transition-all text-left w-full p-4 text-2xl font-bold z-30">
            WEBSITE DEVELOPMENT
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
