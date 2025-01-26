"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Sidebar() {
  return (
    <motion.div
      className="fixed right-8 top-1/3 transform -translate-y-1/2 z-20"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="flex flex-col items-center">
        <span className="text-purple-300 mb-2 text-sm font-semibold">
          Scroll
        </span>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <ChevronDown className="text-purple-300 w-6 h-6" />
        </motion.div>
      </div>
    </motion.div>
  );
}
