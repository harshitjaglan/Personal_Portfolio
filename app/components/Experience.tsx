"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  image: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Development Intern",
    company: "Amazon",
    period: "May 2025 - August 2025",
    description:
      "Designed a multi-region AWS CloudWatch log retrieval system in TypeScript, reducing log-fetch latency by 90% and API calls by 60%. Built a browser-based log viewer for side-by-side comparison, improving incident investigation speed and debugging efficiency.",
    image: "/images/luna.jpg",
  },
  {
    title: "Software Engineering Intern",
    company: "Taskified",
    period: "June 2024 - September 2024",
    description:
      "Engineered end-to-end email template functionality and implemented real-time data collection, reducing correspondence time by 40%",
    image: "/images/Taskified.png",
  },
  {
    title: "CS Learning Assistant",
    company: "Cal State East Bay",
    period: "Aug 2023 - May 2024",
    description:
      "Mentored 80+ students in Python and OOP, boosting pass rates by 15% through personalized coding tutorials",
    image: "/images/LearningAssistant.png",
  },
  {
    title: "Math/Physics Tutor",
    company: "Cal State East Bay",
    period: "Jan 2023 - May 2024",
    description:
      "Tutored 100+ students in advanced math and physics, improving grades by one letter average",
    image: "/images/SCAA.png",
  },
];

export default function Experience() {
  const refs = experiences.map(() => ({
    ref: null as unknown as (node?: Element | null) => void,
    inView: false,
  }));

  const inViews = experiences.map((_, i) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
    refs[i].ref = ref;
    refs[i].inView = inView;
    return inView;
  });

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-center text-purple-300"
        >
          Experience
        </motion.h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-purple-400/20" />

          {/* Experience items */}
          {experiences.map((experience, index) => {
            const { ref, inView } = refs[index];

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0
                    ? "md:flex-row md:pr-[50%] pl-4"
                    : "md:flex-row-reverse md:pl-[50%] pr-4"
                }`}
              >
                {/* Timeline dot with glow effect */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)] ring-2 ring-purple-400/20">
                  <div className="absolute inset-1 bg-white rounded-full opacity-50"></div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
                    {/* Image Card */}
                    <div className="relative h-48 w-full">
                      <Image
                        src={experience.image || "/placeholder.svg"}
                        alt={experience.company}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-purple-300">
                        {experience.title}
                      </h3>
                      <p className="text-purple-200 mb-1">
                        {experience.company}
                      </p>
                      <p className="text-sm text-purple-100/70 mb-3">
                        {experience.period}
                      </p>
                      <p className="text-purple-100/90 text-sm leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
