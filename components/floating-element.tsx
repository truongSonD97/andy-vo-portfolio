"use client"

import { motion } from "framer-motion"

export function FloatingElement({ className, xFactor = 10, yFactor = 10, duration = 5, children }: { className: string, xFactor: number, yFactor: number, duration: number, children?: React.ReactNode }) {
  return (
    <motion.div
      className={className}
      animate={{
        x: [0, xFactor, 0, -xFactor, 0],
        y: [0, -yFactor, 0, yFactor, 0],
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      }}
    >
      {children}
    </motion.div>
  )
}
