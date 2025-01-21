"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Dot {
  x: number;
  y: number;
  radius: number;
}

export default function AnimatedDots() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots: Dot[] = [];
      for (let i = 0; i < 50; i++) {
        newDots.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          radius: Math.random() * 2 + 1,
        });
      }
      setDots(newDots);
    };

    generateDots();
  }, []);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {dots.map((dot, index) => (
        <motion.circle
          key={index}
          cx={`${dot.x}%`}
          cy={`${dot.y}%`}
          r={dot.radius}
          fill="#8B5CF6"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </svg>
  );
}
