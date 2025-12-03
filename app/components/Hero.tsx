"use client";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { useAnimationControls } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import FloatingImage from "./FloatingImage";
import AnimatedDots from "./AnimatedDots";
const roles = ["Full-Stack Developer", "Software Engineer", "DevOps Engineer"];
export default function Hero() {
  const controls = useAnimationControls();
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await controls.start({
          opacity: 0,
          x: -50,
          transition: { duration: 0.5 },
        });
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    };

    animate();
  }, [controls]);
  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden"
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
          className="text-5xl font-bold mb-12 text-purple-300"
        >
          Harshit Jaglan
        </motion.h1>
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8 text-purple-100"
        >
          Web Developer & Designer
        </motion.p> */}
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
        {/* Social media icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex justify-center space-x-4"
        >
          <a
            href="https://github.com/harshitjaglan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-100 transition-colors duration-300"
          >
            <Github size={40} />
          </a>
          <a
            href="https://linkedin.com/in/harshit-jaglan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-100 transition-colors duration-300"
          >
            <Linkedin size={40} />
          </a>
        </motion.div>
        {/* Spotify player with label, positioned to the right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 absolute right-20 top-1/2 transform -translate-y-1/2"
        >
          <p className="text-purple-300 mb-2 text-sm font-medium text-center">
            Play my favorite song ♪
          </p>
          <iframe
            src="https://open.spotify.com/embed/track/0iiB9CYptXO5Fz728LHHsQ?utm_source=generator"
            width="300"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="mx-auto rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-opacity"
          ></iframe>
        </motion.div>
        {/* Animated roles */}
        <div className="h-8 mt-6">
          {" "}
          {/* Added margin-top for spacing */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            className="text-xl text-purple-100 font-light tracking-wide"
          >
            {roles[currentRole]}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
