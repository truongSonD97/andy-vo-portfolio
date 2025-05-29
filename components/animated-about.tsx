"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CountUp } from "@/components/count-up"
import { FloatingElement } from "@/components/floating-element"

export function AnimatedAbout() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about")
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <div className="relative">
      <FloatingElement
        className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-primary/5 blur-xl"
        xFactor={30}
        yFactor={20}
        duration={10}
      />
      <FloatingElement
        className="absolute bottom-1/3 right-1/3 w-60 h-60 rounded-full bg-purple-500/5 blur-xl"
        xFactor={25}
        yFactor={15}
        duration={12}
      />
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={staggerChildren}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
      >
        <motion.div
          variants={scaleIn}
          whileHover={{ y: -5 }}
          className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-primary">{isVisible && <CountUp end={6} duration={1} />}+</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Years Experience</h3>
          <p className="text-muted-foreground">Professional software development experience across industries</p>
        </motion.div>

        <motion.div
          variants={scaleIn}
          whileHover={{ y: -5 }}
          className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-primary">{isVisible && <CountUp end={5} duration={2} />}+</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Projects Completed</h3>
          <p className="text-muted-foreground">Successfully delivered projects for clients worldwide</p>
        </motion.div>

        <motion.div
          variants={scaleIn}
          whileHover={{ y: -5 }}
          className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-primary">{isVisible && <CountUp end={10} duration={2} />}+</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Technologies</h3>
          <p className="text-muted-foreground">Proficient in a wide range of modern technologies</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
