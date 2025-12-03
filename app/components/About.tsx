"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function About() {
  const [isMounted, setIsMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={
            isMounted && inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center text-purple-300"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={
            isMounted && inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-purple-100 leading-relaxed max-w-2xl mx-auto"
        >
          Hello! I'm a passionate web developer with a keen eye for design. I
          love creating beautiful, functional websites that provide great user
          experiences. With expertise in modern web technologies, I bring ideas
          to life through clean, efficient code.
        </motion.p>
      </div>
    </section>
  );
}
