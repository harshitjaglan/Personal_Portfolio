"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <Sidebar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
