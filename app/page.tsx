
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { ThemeToggle } from "@/components/mode-toggle";
import { ProjectCarousel } from "@/components/project-carousel";
import { WorkHistoryTree } from "@/components/work-history-tree";
import { AnimatedHero } from "@/components/animated-hero";
import { AnimatedAbout } from "@/components/animated-about";
import { AnimatedExperience } from "@/components/animated-experience";
import { AnimatedSkills } from "@/components/animated-skills";
import { AnimatedEducation } from "@/components/animated-education";
import { AnimatedProjects } from "@/components/animated-projects";
import React from "react";
import ContactForm from "@/components/contact-form";
import { ProductShowcase } from "@/components/product-showcase";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Andy Vo - Senior Software Engineer | Portfolio",
  description:
    "Passionate software engineer with 6+ years of experience crafting responsive front-end interfaces and building robust back-end systems using modern frameworks like React, Next.js, NestJS, and Express. View my portfolio of projects and experience.",
  keywords:
    "software engineer, web developer, React, Next.js, TypeScript, portfolio",
  openGraph: {
    title: "Andy Vo - Senior Software Engineer",
    description:
      "Passionate software engineer with 6+ years of experience crafting responsive front-end interfaces and building robust back-end systems using modern frameworks like React, Next.js, NestJS, and Express.",
    type: "website",
    url: "https://andyvo.dev",
    images: [
      {
        url: "/data/avatar.JPG",
        width: 600,
        height: 600,
        alt: "Andy Vo - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andy Vo - Senior Software Engineer",
    description:
      "Passionate software engineer with 6+ years of experience crafting responsive front-end interfaces and building robust back-end systems using modern frameworks like React, Next.js, NestJS, and Express.",
    images: ["/data/avatar.JPG"],
  },
};

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col">
      <Header/>

      <main className="flex-1">
        {/* Hero Section - Server-rendered content with client-side animations */}
        <AnimatedHero>
          <React.Fragment>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Andy Vo
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Senior Software Engineer
              </p>
            </div>
            <div className="space-y-4 text-gray-500 dark:text-gray-400">
              <div className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 h-[80px] md:h-[60px] lg:h-fit">
                <span className="inline">
                  Passionate software engineer with 6+ years of experience
                  crafting responsive front-end interfaces and building robust
                  back-end systems using modern frameworks like NodeJs, React,
                  Next.js, NestJS, and Express.
                </span>
              </div>
            </div>
          </React.Fragment>
        </AnimatedHero>

        {/* About Section */}
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Who I Am
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Full-stack Software Engineer with 6 years of front-end and 4
                  years of back-end experience, specializing in scalable,
                  responsive web applications. Skilled in React, Next.js, Redux,
                  NestJS, and Express, Microservices, with strong database
                  knowledge (PostgreSQL, MySQL, MongoDB). Passionate about
                  performance optimization, API integration, and delivering
                  seamless user experiences.
                </p>
              </div>
            </div>
            <AnimatedAbout />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Career Journey
                </h2>
                <p className="max-w-[700px] text-muted-foreground mx-auto">
                  Follow my professional growth from junior developer to senior
                  engineer, showcasing the evolution of skills and
                  responsibilities.
                </p>
              </div>
            </div>
            <AnimatedExperience>
              <WorkHistoryTree />
            </AnimatedExperience>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Skills
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Technical Expertise
                </h2>
              </div>
            </div>
            <AnimatedSkills>
              <div className="mx-auto grid max-w-5xl gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="hover:shadow-md transition-all duration-300 h-full border-t-4 border-t-primary">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>React</Badge>
                      <Badge>Next.js</Badge>
                      <Badge>TypeScript</Badge>
                      <Badge>Tailwind CSS</Badge>
                      <Badge>Redux</Badge>
                      <Badge>Zustand</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-all duration-300 h-full border-t-4 border-t-blue-500">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Node.js</Badge>
                      <Badge>Express</Badge>
                      <Badge>Python</Badge>
                      <Badge>Django</Badge>
                      <Badge>GraphQL</Badge>
                      <Badge>NestJS</Badge>
                      <Badge>Microservices</Badge>
                      <Badge>RabbitMQ</Badge>
                      <Badge>Google Pub/Sub</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-all duration-300 h-full border-t-4 border-t-green-500">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Database</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>MongoDB</Badge>
                      <Badge>PostgreSQL</Badge>
                      <Badge>MySQL</Badge>
                      <Badge>Redis</Badge>
                      <Badge>Firebase</Badge>
                      <Badge>Distributed Database</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-all duration-300 h-full border-t-4 border-t-orange-500">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">DevOps</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Docker</Badge>
                      <Badge>AWS</Badge>
                      <Badge>CI/CD</Badge>
                      <Badge>Git</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-all duration-300 h-full border-t-4 border-t-pink-500">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Leadership</Badge>
                      <Badge>Communication</Badge>
                      <Badge>Problem Solving</Badge>
                      <Badge>Teamwork</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-all duration-300 h-full border-t-4 border-t-purple-500">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Others</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>SOLID</Badge>
                      <Badge>CQRS</Badge>
                      <Badge>SAGA Pattern</Badge>
                      <Badge>Event-Driven Architecture</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSkills>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Education
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Academic Background
                </h2>
              </div>
            </div>
            <AnimatedEducation>
              <div className="mx-auto grid max-w-5xl gap-8 mt-8">
                <div className="flex flex-col gap-2 rounded-lg border p-6 hover:shadow-md transition-all duration-300 bg-gradient-to-r from-background to-muted/20">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">
                    Engineer of Computer Science
                    </h3>
                    <Badge>2015 - 2020</Badge>
                  </div>
                  <p className="text-muted-foreground">Ho Chi Minh City University of Technology</p>
                </div>
              </div>
            </AnimatedEducation>
          </div>
        </section>

        {/** Product */}

        <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 relative overflow-hidden">
          <ProductShowcase />
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Featured Work
                  </span>
                </h2>
                <p className="max-w-[700px] text-muted-foreground mx-auto">
                  Explore my portfolio of projects spanning web development,
                  mobile apps, and more. Each project represents a unique
                  challenge and solution.
                </p>
              </div>
            </div>
            <AnimatedProjects>
              <ProjectCarousel />
            </AnimatedProjects>
          </div>
        </section>

 

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get In Touch
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Interested in working together? Feel free to reach out to me.
                </p>
              </div>
             <ContactForm/>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2025 Andy Vo. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
