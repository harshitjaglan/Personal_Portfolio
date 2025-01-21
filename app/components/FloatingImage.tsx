"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FloatingImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function FloatingImage({
  src,
  alt,
  width,
  height,
  className,
}: FloatingImageProps) {
  const floatAnimation = {
    y: ["-10%", "10%"],
    transition: {
      y: {
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      animate={floatAnimation}
      className={`absolute ${className}`}
      style={{
        width: width,
        height: height,
      }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="rounded-lg shadow-lg object-cover"
      />
    </motion.div>
  );
}
