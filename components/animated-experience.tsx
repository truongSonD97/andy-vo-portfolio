"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FloatingElement } from "@/components/floating-element"

export function AnimatedExperience({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("experience")
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="relative">
      <FloatingElement
        className="absolute top-1/3 right-10 w-32 h-32 rounded-full bg-primary/5 blur-xl"
        xFactor={20}
        yFactor={10}
        duration={8}
      />
      <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={fadeInUp} className="mt-12">
        {children}
      </motion.div>
    </div>
  )
}
