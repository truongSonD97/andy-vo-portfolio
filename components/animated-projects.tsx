"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FloatingElement } from "@/components/floating-element"

export function AnimatedProjects({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("projects")
      if (element) {
        const rect = element.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight * 0.75 && rect.bottom >= 0
        setIsVisible(isInView)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative">
      <FloatingElement
        className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-primary/5 blur-xl"
        xFactor={25}
        yFactor={15}
        duration={10}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8"
      >
        {children}
      </motion.div>
    </div>
  )
}
