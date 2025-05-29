"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const workExperience = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Relia Software",
    period: "2020 - Present",
    description:
      "Built and maintained a large-scale payroll and timesheet system used by 30+ companies and 5,000+ users. Led front-end development for finance and crypto apps. Optimized job queues and database queries, improving performance by 4x. Integrated HMRC APIs and managed AWS-based workflows.",
    technologies: ["React", "Next.js", "Redux",  "Zustand", "Node.js", "AWS", "Docker", "Microservices", "PostgreSQL", "MySQL", "MongoDB"],
    level: "senior",
  },
  {
    id: 2,
    title: "Freelance Software Engineer",
    company: "Freelancer",
    period: "2022 - 2024",
    description:
      "Delivered AI-powered blogging features using OpenAI APIs and built e-commerce components like cart and checkout for Next.js apps. Improved mobile banking UX with React Native, implementing EKYC, video calls, and VietQR payments.",
    technologies: ["React", "Next.js", "React Native", "OpenAI","Redux"],
    level: "mid",
  },
  {
    id: 3,
    title: "ReactJS Collaborator",
    company: "WebCraft Studios",
    period: "2019 - 2020",
    description:
      "Developed a web app to record and manage real-time traffic reports from listeners for radio broadcast. Handled full front-end implementation and worked closely with VOH leaders on requirements and feedback.",
    technologies: ["React","Redux","Firebase"],
    level: "junior",
  },
]

export function WorkHistoryTree() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const nodeVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20 hidden md:block"></div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
        {workExperience.map((job, index) => (
          <motion.div key={job.id} variants={nodeVariants} className="relative">
            {/* Timeline Node */}
            <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10 hidden md:block"></div>

            {/* Connecting Branch Line */}
            <div className="absolute left-10 top-8 w-8 h-0.5 bg-primary/60 hidden md:block"></div>

            {/* Job Card */}
            <motion.div whileHover={{ scale: 1.02, y: -5 }} className="ml-0 md:ml-20">
              <Card className="overflow-hidden border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-background to-muted/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            job.level === "senior"
                              ? "bg-green-500"
                              : job.level === "mid"
                                ? "bg-yellow-500"
                                : "bg-blue-500"
                          }`}
                        ></div>
                        <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                      </div>
                      <p className="text-primary font-medium mb-1">{job.company}</p>
                      <Badge variant="outline" className="mb-3">
                        {job.period}
                      </Badge>
                    </div>

                    {/* Experience Level Indicator */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                          job.level === "senior"
                            ? "bg-gradient-to-br from-green-500 to-green-600"
                            : job.level === "mid"
                              ? "bg-gradient-to-br from-yellow-500 to-yellow-600"
                              : "bg-gradient-to-br from-blue-500 to-blue-600"
                        }`}
                      >
                        {job.level === "senior" ? "SR" : job.level === "mid" ? "MID" : "JR"}
                      </div>
                      <span className="text-xs text-muted-foreground mt-1 capitalize">{job.level}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Growth Arrow (between jobs) */}
            {index < workExperience.length - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex justify-center my-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">Career Growth</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Career Progression Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-lg border border-primary/20"
      >
        <h4 className="text-lg font-semibold mb-3 text-center">Career Journey Summary</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
              <span className="text-blue-600 font-bold">2019</span>
            </div>
            <span className="text-sm font-medium">Started as Junior</span>
            <span className="text-xs text-muted-foreground">Web Development</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-2">
              <span className="text-yellow-600 font-bold">2020</span>
            </div>
            <span className="text-sm font-medium">Promoted to Full Stack</span>
            <span className="text-xs text-muted-foreground">Advanced Skills</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
              <span className="text-green-600 font-bold">2024</span>
            </div>
            <span className="text-sm font-medium">Senior Engineer</span>
            <span className="text-xs text-muted-foreground">Leadership Role</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
