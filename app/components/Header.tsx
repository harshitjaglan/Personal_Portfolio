"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const scrollToSection = (sectionId: string) => {
    if (!isMounted) return;
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="
        fixed inset-x-0 top-4 z-50
        flex items-center justify-center
        bg-transparent !bg-transparent
        shadow-none backdrop-blur-0
        pointer-events-none
      "
      style={{ background: "transparent" }}
    >
      <nav
        aria-label="Primary"
        className="
          pointer-events-auto
          w-fit rounded-full px-8 py-3
          bg-gray-900/80 supports-[backdrop-filter]:bg-gray-900/60
          backdrop-blur-md ring-1 ring-white/10 shadow-lg
        "
      >
        <ul className="flex justify-center space-x-8">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="text-purple-300 hover:text-purple-100 transition duration-300 cursor-pointer"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-purple-300 hover:text-purple-100 transition duration-300 cursor-pointer"
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-purple-300 hover:text-purple-100 transition duration-300 cursor-pointer"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-purple-300 hover:text-purple-100 transition duration-300 cursor-pointer"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
