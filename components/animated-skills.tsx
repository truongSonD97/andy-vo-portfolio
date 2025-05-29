"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FloatingElement } from "@/components/floating-element"

export function AnimatedSkills({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills")
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
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="relative ">
      <FloatingElement
        className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-primary/5 blur-xl"
        xFactor={15}
        yFactor={25}
        duration={9}
      />
      <motion.div className="mx-auto grid max-w-5xl gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3" initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={staggerChildren}>
        {React.isValidElement(children) && React.Children.map((children as React.ReactElement<{ children: React.ReactNode }>).props.children, (child, index) => (
          <motion.div key={index} variants={fadeInUp} whileHover={{ y: -5, scale: 1.02 }}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
