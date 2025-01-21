"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed w-full bg-gray-900/95 backdrop-blur-sm shadow-lg z-50 top-0"
    >
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link
              href="#home"
              className="text-purple-300 hover:text-purple-100 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-purple-300 hover:text-purple-100 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-purple-300 hover:text-purple-100 transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-purple-300 hover:text-purple-100 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
