"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-purple-900"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4 text-purple-300"
        >
          Your Name
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
        >
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Your Name"
            width={200}
            height={200}
            className="rounded-full mx-auto border-4 border-purple-400 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}

