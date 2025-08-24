import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const Work = () => {
  const workRef = useRef();
  const { scrollYProgress } = useScroll({
    target: workRef,
    offset: ["0 0", "1 1"],
  });
  const workScroll = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const progressScroll = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    {
      stiffness: 200,
      damping: 30,
    }
  );
  const projects = [
    {
      id: 1,
      title: "Brand Identity for TechFlow",
      description:
        "Complete visual identity design including logo, color palette, and brand guidelines",
      image:
        "https://i.pinimg.com/736x/6f/64/2b/6f642bdaa051c8e3dfc0041d1c5219d5.jpg",
      category: "Brand Identity",
      technologies: ["Adobe Illustrator", "Figma", "Adobe Photoshop"],
    },
    {
      id: 2,
      title: "E-Commerce UI/UX Design",
      description:
        "Modern and intuitive shopping experience with seamless user journey",
      image:
        "https://i.pinimg.com/736x/54/1e/b7/541eb7bfd04ffd74b77066c65f16b41f.jpg",
      category: "UI/UX Design",
      technologies: ["Figma", "Sketch", "Principle"],
    },
    {
      id: 3,
      title: "Corporate Website Redesign",
      description:
        "Professional website redesign that reflects company values and drives conversions",
      image:
        "https://i.pinimg.com/736x/e7/e5/5c/e7e55c5e297d2b6ab138419b07cfdec7.jpg",
      category: "Web Design",
      technologies: ["Figma", "Adobe XD", "Webflow"],
    },
    {
      id: 4,
      title: "Mobile App Interface",
      description:
        "Clean and modern mobile application design with focus on user experience",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      category: "Mobile Design",
      technologies: ["Figma", "Sketch", "Framer"],
    },
    {
      id: 5,
      title: "Marketing Campaign Design",
      description:
        "Eye-catching visual assets for multi-channel marketing campaign",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "Marketing Design",
      technologies: ["Adobe Creative Suite", "Canva Pro", "Figma"],
    },
    {
      id: 6,
      title: "Package Design Collection",
      description:
        "Sustainable and innovative packaging design for premium product line",
      image:
        "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&h=400&fit=crop",
      category: "Package Design",
      technologies: ["Adobe Illustrator", "Dimension", "Photoshop"],
    },
  ];

  const handleProjectClick = (projectId) => {
    console.log(`Navigating to project ${projectId}`);
  };

  return (
    <section ref={workRef} id="work" className="h-[400vh]   bg-[#050505]">
      <div className="sticky top-0 py-12 h-[100dvh] flex flex-col">
        <div className="text-white shrink-0 z-20  px-6  md:px-12 text-5xl font-bold font-instrument-serif mb-4">
          FEATURED WORK
        </div>
        
        <motion.div
          initial={{ opacity: 1 }}
          // whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="overflow-hidden px-12 h-full flex items-center"
        >
          <motion.div style={{width: progressScroll}} className="absolute left-0 bottom-0 h-[4px]   bg-dt-yellow" > </motion.div>
          <motion.div
            style={{ x: workScroll }}
            className="flex gap-4 h-full w-fit justify-stretch items-center"

          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 1, x: 0 }}
                whileHover={"hover"}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                // whileHover={{ y: -8 }}
                onClick={() => handleProjectClick(project.id)}
                className="relative bg-zinc-900/50 rounded-sm transition-all  duration-500 cursor-pointer flex-shrink-0 w-[60vw] flex flex-col h-[40vw] group overflow-hidden"
              >
                <motion.div className="px-4  items-center font-rubik font-semibold w-full justify-between flex">
                  {project.title}{" "}
                  <div className="text-sm my-2 text-zinc-500">
                    {"JULY 25, 2025"}
                  </div>
                </motion.div>
                <div className="h-full w-full overflow-hidden relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover absolute "
                    // whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
                <div className=" font-medium text-sm whitespace-nowrap  font-rubik text-white flex gap-2 ">
                  {project.technologies.map((tech, index) => (
                    <>
                      <div className="capitalize border-r-zinc-800 border-r h-full py-2 px-4">
                        {tech.toUpperCase()}
                      </div>
                    </>
                  ))}
                </div>
                <motion.div
                  initial={{ height: "0vw" }}
                  variants={{
                    hover: {
                      height: "10vw",
                    },
                  }}
                  className="flex flex-col overflow-hidden font-rubik text-sm px-4  border-t border-t-zinc-800"
                >
                  <div className="font-medium mt-2">{project.title}</div>
                  <div className="mb-2">{project.description}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
