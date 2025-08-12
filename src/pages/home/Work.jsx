import React from 'react'
import { motion } from 'framer-motion'

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Brand Identity for TechFlow",
      description: "Complete visual identity design including logo, color palette, and brand guidelines",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      category: "Brand Identity",
      technologies: ["Adobe Illustrator", "Figma", "Adobe Photoshop"]
    },
    {
      id: 2,
      title: "E-Commerce UI/UX Design",
      description: "Modern and intuitive shopping experience with seamless user journey",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "UI/UX Design",
      technologies: ["Figma", "Sketch", "Principle"]
    },
    {
      id: 3,
      title: "Corporate Website Redesign",
      description: "Professional website redesign that reflects company values and drives conversions",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      category: "Web Design",
      technologies: ["Figma", "Adobe XD", "Webflow"]
    },
    {
      id: 4,
      title: "Mobile App Interface",
      description: "Clean and modern mobile application design with focus on user experience",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      category: "Mobile Design",
      technologies: ["Figma", "Sketch", "Framer"]
    },
    {
      id: 5,
      title: "Marketing Campaign Design",
      description: "Eye-catching visual assets for multi-channel marketing campaign",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "Marketing Design",
      technologies: ["Adobe Creative Suite", "Canva Pro", "Figma"]
    },
    {
      id: 6,
      title: "Package Design Collection",
      description: "Sustainable and innovative packaging design for premium product line",
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&h=400&fit=crop",
      category: "Package Design",
      technologies: ["Adobe Illustrator", "Dimension", "Photoshop"]
    }
  ]

  const handleProjectClick = (projectId) => {
    console.log(`Navigating to project ${projectId}`)
  }

  return (
    <section id="work" className='py-32 px-6 md:px-12 bg-zinc-950'>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-center mb-16'
      >
        <h2 className='text-6xl md:text-8xl font-instrument-serif mb-6'>
          Our <span className='text-dt-yellow'>Work</span>
        </h2>
        <p className='text-xl font-rubik text-zinc-400 max-w-2xl mx-auto'>
          Crafting digital experiences that captivate, engage, and convert
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className='overflow-x-auto pb-8 scrollbar-hide'
      >
        <div className='flex gap-8 min-w-max px-4'>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => handleProjectClick(project.id)}
              className='relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-3xl shadow-2xl hover:shadow-dt-yellow/10 transition-all duration-500 cursor-pointer flex-shrink-0 w-96 group overflow-hidden'
            >
              <div className='relative overflow-hidden rounded-t-3xl h-56'>
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className='w-full h-full object-cover'
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
                <div className='absolute top-6 left-6'>
                  <span className='bg-dt-yellow/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-rubik font-semibold text-black'>
                    {project.category}
                  </span>
                </div>
                <div className='absolute bottom-6 right-6'>
                  <motion.div 
                    className='w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                  </motion.div>
                </div>
              </div>
              
              <div className='p-8'>
                <h3 className='text-2xl font-instrument-serif mb-3 group-hover:text-dt-yellow transition-colors duration-300'>
                  {project.title}
                </h3>
                <p className='text-zinc-400 mb-6 text-base font-rubik leading-relaxed'>
                  {project.description}
                </p>
                
                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className='bg-zinc-800/80 border border-zinc-700/50 px-3 py-1 rounded-full text-sm text-zinc-300 font-rubik'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.div 
                  className='flex items-center text-dt-yellow text-base font-rubik font-semibold group-hover:text-yellow-400 transition-colors cursor-pointer'
                  whileHover={{ x: 4 }}
                >
                  View Project
                  <motion.svg 
                    className='ml-3 w-5 h-5' 
                    fill='none' 
                    stroke='currentColor' 
                    viewBox='0 0 24 24'
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className='flex justify-center mt-12'
      >
        <p className='text-zinc-500 text-lg font-rubik flex items-center'>
          <motion.svg 
            className='w-5 h-5 mr-3' 
            fill='none' 
            stroke='currentColor' 
            viewBox='0 0 24 24'
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16l4-4m0 0l4-4m-4 4H3m6 0h6' />
          </motion.svg>
          Scroll horizontally to explore our portfolio
        </p>
      </motion.div>
    </section>
  )
}

export default Work
