"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "MapTravel",
    image: "/images/springboot.png",
    description:
      "Personal project to mark places I want to visit, developed with a Spring Boot backend, a React (Vite) frontend, and Jenkins for CI/CD pipeline automation.",
  },
  {
    id: 2,
    title: "TreeDatalize",
    image: "/images/treeDatalize.jpg",
    description:
      "First place HackDavis 2023 helps the locals to better decide plants for their garden to prevent global warming",
  },
  {
    id: 3,
    title: "AggieShift",
    image: "/images/aggieshift.jpg",
    description:
      "Built at UC Davis hackathon 2024 for local non-profit for precise clock-in and clock-out of volunteers",
  },

  {
    id: 4,
    title: "Wildfire Insurance",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Helping those in need to file insurance claims to recall all lost items and create a ",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-center text-purple-300"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-300">
                  {project.title}
                </h3>
                <p className="text-purple-100">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
