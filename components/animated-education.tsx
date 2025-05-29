"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FloatingElement } from "@/components/floating-element"

export function AnimatedEducation({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("education")
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

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="relative mt-8">
      <FloatingElement
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/5 blur-xl"
        xFactor={20}
        yFactor={15}
        duration={8}
      />
      <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={staggerChildren}>
        {React.isValidElement(children) && React.Children.map((children as React.ReactElement<{ children: React.ReactNode }>).props.children, (child, index) => (
          <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.02 }}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
