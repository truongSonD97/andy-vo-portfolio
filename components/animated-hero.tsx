"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TypeAnimation } from "@/components/type-animation"
import { FloatingElement } from "@/components/floating-element"
import Image from "next/image"

export function AnimatedHero({children}: {children: React.ReactNode}) {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <motion.section style={{ opacity, scale }} className="w-full py-12 md:py-18 relative overflow-hidden">
      <FloatingElement
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"
        xFactor={15}
        yFactor={15}
        duration={7}
      />
      <FloatingElement
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-purple-500/10 blur-xl"
        xFactor={20}
        yFactor={20}
        duration={9}
      />
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-4"
          >
            {children}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-3 min-[400px]:flex-row pt-2"
            >
              <Button className="gap-1 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-600/80">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
              <Link href="/data/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-1">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-4 pt-2"
            >
              <Link href="https://github.com/truongSonD97" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 transition-all duration-300 border"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/truongsonvo/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 transition-all duration-300 border"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          >
            <Image
              alt="Profile Photo"
              className="aspect-square object-cover transition-all duration-500 hover:scale-105 w-fit"
              height={450}
              src="/data/avatar.JPG"
              width={450}
              layout="responsive"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-12"
        >
        </motion.div>
      </div>
    </motion.section>
  )
}
