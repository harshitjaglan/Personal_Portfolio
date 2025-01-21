"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FloatingImage from "./FloatingImage";
import AnimatedDots from "./AnimatedDots";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-purple-900"
    >
      <AnimatedDots />
      {/* Floating background images */}
      <FloatingImage
        src="/images/berkely.jpeg"
        alt="Floating Image 1"
        width={150}
        height={150}
        className="top-1/4 left-1/4 opacity-30"
      />
      <FloatingImage
        src="/images/cal.jpg"
        alt="Floating Image 2"
        width={100}
        height={100}
        className="top-1/3 right-1/4 opacity-20"
      />
      <FloatingImage
        src="/images/hackDavis.jpeg"
        alt="Floating Image 3"
        width={120}
        height={120}
        className="bottom-1/4 left-1/3 opacity-25"
      />
      <FloatingImage
        src="/images/camping.jpg"
        alt="Floating Image 4"
        width={80}
        height={80}
        className="top-1/2 right-1/3 opacity-15"
      />

      <div className="text-center z-10 px-4">
        {" "}
        {/* Added px-4 for some horizontal padding */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4 text-purple-300"
        >
          Harshit Jaglan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8 text-purple-100"
        >
          Web Developer & Designer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <Image
            src="/images/profile.jpeg"
            alt="Harshit Jaglan"
            width={200}
            height={200}
            className="rounded-full mx-auto border-4 border-purple-400 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
