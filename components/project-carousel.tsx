"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import Link from "next/link"
import { projectsData } from "@/data/projects"
import Image from "next/image"

export function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex-[0_0_90%] min-w-0 pl-4 sm:flex-[0_0_45%] md:flex-[0_0_30%]"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="h-full min-h-[500px] flex flex-col overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-0 flex-1 flex flex-col">
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                        src={project.image || "/placeholder.svg?height=180&width=320"}
                        width={320}
                        height={180}
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{project.title}</h3>
                        <Badge variant="secondary">{project.year}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">{project.shortDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full hover:bg-primary/10 transition-all duration-300"
                        asChild
                      >
                        <Link href={`/projects/${project.slug}`}>View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-primary/10 transition-all duration-300"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-primary/10 transition-all duration-300"
          onClick={scrollNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-primary w-6" : "bg-primary/30"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
