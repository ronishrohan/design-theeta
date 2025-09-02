

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Ava Patel",
    company: "Brandify",
    text: "Design Theeta transformed our brand identity. The process was smooth, creative, and the results were stunning!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Liam Chen",
    company: "PixelPeak",
    text: "Their UI/UX work elevated our product. The team is talented, responsive, and a joy to work with.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sofia Rossi",
    company: "Vivid Studio",
    text: "We loved the collaborative approach and the attention to detail. Highly recommended for any creative project!",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];


// Stacked card variants

// Enhanced stacked card variants with tilt and offset
const cardStackVariants = {
  center: {
    scale: 1,
    y: 0,
    x: 0,
    rotate: 0,
    zIndex: 10,
    opacity: 1,
    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
    transition: { type: "spring", stiffness: 90, damping: 22, mass: 1.1 }
  },
  left: {
    scale: 0.93,
    y: 20,
    x: -90,
    rotate: -10,
    zIndex: 8,
    opacity: 1,
    boxShadow: "0 4px 16px 0 rgba(0,0,0,0.15)",
    transition: { type: "spring", stiffness: 90, damping: 22, mass: 1.1 }
  },
  right: {
    scale: 0.93,
    y: 20,
    x: 90,
    rotate: 10,
    zIndex: 8,
    opacity: 1,
    boxShadow: "0 4px 16px 0 rgba(0,0,0,0.15)",
    transition: { type: "spring", stiffness: 90, damping: 22, mass: 1.1 }
  },
  hidden: {
    scale: 0.88,
    y: 120,
    x: 0,
    rotate: 0,
    zIndex: 0,
    opacity: 0,
    transition: { duration: 0.32 }
  }
};

const Reviews = () => {


  const [index, setIndex] = useState(0);
  const [blockScroll, setBlockScroll] = useState(true);

  // Enhanced: allow scrolling through cards with wheel/touchpad/touch, block page scroll until last card
  useEffect(() => {
    let startY = null;
    const onWheel = (e) => {
      if (!blockScroll) return;
      if (e.deltaY > 0) {
        if (index < testimonials.length - 1) {
          setIndex((i) => Math.min(i + 1, testimonials.length - 1));
          e.preventDefault();
        } else {
          setBlockScroll(false);
        }
      } else if (e.deltaY < 0) {
        if (index > 0) {
          setIndex((i) => Math.max(i - 1, 0));
          e.preventDefault();
        }
      }
    };
    const onTouchStart = (e) => {
      if (!blockScroll) return;
      if (e.touches && e.touches.length === 1) {
        startY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e) => {
      if (!blockScroll || startY === null) return;
      const currentY = e.touches[0].clientY;
      const diffY = startY - currentY;
      if (Math.abs(diffY) > 30) {
        if (diffY > 0 && index < testimonials.length - 1) {
          setIndex((i) => Math.min(i + 1, testimonials.length - 1));
          startY = null;
          e.preventDefault();
        } else if (diffY < 0 && index > 0) {
          setIndex((i) => Math.max(i - 1, 0));
          startY = null;
          e.preventDefault();
        } else if (diffY > 0 && index === testimonials.length - 1) {
          setBlockScroll(false);
        }
      }
    };
    if (blockScroll) {
      window.addEventListener('wheel', onWheel, { passive: false });
      window.addEventListener('touchstart', onTouchStart, { passive: false });
      window.addEventListener('touchmove', onTouchMove, { passive: false });
    }
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [index, blockScroll, testimonials.length]);

  // Reset blockScroll if user scrolls back to first card
  useEffect(() => {
    if (index < testimonials.length - 1 && !blockScroll) setBlockScroll(true);
  }, [index, testimonials.length, blockScroll]);

  // Calculate stack order: center, left, right, hidden
  const getCardState = (i) => {
    const pos = (i - index + testimonials.length) % testimonials.length;
    if (pos === 0) return "center";
    if (pos === 1) return "right";
    if (pos === testimonials.length - 1) return "left";
    return "hidden";
  };

  return (
    <section className="py-28 px-6 md:px-12 bg-zinc-950">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-instrument-serif text-center mb-16 text-dt-yellow drop-shadow-lg"
      >
        What Our Clients Say
      </motion.h2>
      <div className="flex justify-center items-center gap-8 max-w-3xl mx-auto relative">
        <div className="w-full max-w-xl min-h-[340px] flex items-center justify-center relative" style={{height: 360}}>
          {testimonials.map((t, i) => {
            const state = getCardState(i);
            // Only the center card is clickable to cycle reviews
            const isCenter = state === "center";
            return (
              <motion.div
                key={t.name}
                variants={cardStackVariants}
                animate={state}
                initial={false}
                exit={false}
                className="absolute left-0 right-0 mx-auto bg-zinc-900 border border-zinc-800/60 rounded-3xl shadow-xl p-10 flex flex-col items-center text-center w-full cursor-pointer"
                style={{ pointerEvents: isCenter ? "auto" : "none", transformOrigin: "50% 80%" }}
                onClick={isCenter ? () => setIndex((i) => (i + 1) % testimonials.length) : undefined}
                tabIndex={isCenter ? 0 : -1}
                onKeyDown={isCenter ? (e) => { if (e.key === 'Enter' || e.key === ' ') setIndex((i) => (i + 1) % testimonials.length); } : undefined}
                aria-label={isCenter ? "Next review" : undefined}
              >
                <motion.img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-dt-yellow mb-6 shadow-lg"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                />
                <motion.p className="text-xl text-zinc-200 font-rubik mb-6 leading-relaxed">
                  "{t.text}"
                </motion.p>
                <motion.div className="text-dt-yellow font-semibold text-lg font-instrument-serif mb-1">
                  {t.name}
                </motion.div>
                <motion.div className="text-zinc-400 text-sm font-rubik">
                  {t.company}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 mt-8">
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-dt-yellow" : "bg-zinc-700"}`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
