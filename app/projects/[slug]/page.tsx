import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import type { Metadata } from "next";
import { ScrollToTop } from "@/components/scroll-to-top";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Clock,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { ProjectCarousel } from "@/components/project-carousel";
import { FloatingElement } from "@/components/floating-element";
import Image from "next/image";
import { DynamicMotionComponent } from "@/components/ui/dynamic-motion";
import { productsData } from "@/data/product";
import { Project } from "@/types/project";
interface ProjectPageProps {
  params: {
    slug: string;
  };
}

function getProjectBySlug(slug: string) {
  return projectsData
    .concat(productsData)
    .find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Andy Vo Portfolio`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [project.image],
    },
  };
}

export async function generateStaticParams() {
  return projectsData.concat(productsData).map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug) as Project | undefined;

  if (!project) {
    notFound();
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <ScrollToTop className="min-h-screen bg-background">
      <DynamicMotionComponent
        elementType="header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="text-xl">Andy Vo</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/#projects">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
            {project.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2 hidden md:flex"
                asChild
              >
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" className="gap-2 hidden md:flex" asChild>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </Link>
              </Button>
            )}
          </div>
        </div>
      </DynamicMotionComponent>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-purple-500/5" />
          <div className="container relative py-12 md:py-24">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <DynamicMotionComponent
                elementType="div"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <DynamicMotionComponent
                    elementType="div"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <Badge variant="outline" className="bg-primary/10">
                      {project.year}
                    </Badge>
                    <Badge variant="outline" className="bg-purple-500/10">
                      {project.role}
                    </Badge>
                  </DynamicMotionComponent>
                  <DynamicMotionComponent
                    elementType="h1"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                  >
                    <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      {project.title}
                    </span>
                  </DynamicMotionComponent>
                  <DynamicMotionComponent
                    elementType="p"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl text-muted-foreground leading-relaxed"
                  >
                    {project.fullDescription}
                  </DynamicMotionComponent>
                </div>

                <DynamicMotionComponent
                  elementType="div"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap gap-3"
                >
                  {project.liveUrl && (
                    <Button asChild className="gap-2">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" asChild className="gap-2">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Source Code
                      </Link>
                    </Button>
                  )}
                </DynamicMotionComponent>
              </DynamicMotionComponent>

              <DynamicMotionComponent
                elementType="div"
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-video overflow-hidden rounded-xl border shadow-2xl">
                  <Image
                    alt={project.title}
                    className="object-cover w-full h-full"
                    src={
                      project.image || "/placeholder.svg?height=400&width=600"
                    }
                    width={600}
                    height={400}
                    layout="responsive"
                    quality={75}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full opacity-20 blur-xl" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-10 blur-xl" />
              </DynamicMotionComponent>
            </div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="py-12 bg-muted/30 relative overflow-hidden">
          <FloatingElement
            className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-primary/5 blur-xl"
            xFactor={25}
            yFactor={15}
            duration={10}
          />
          <div className="container">
            <DynamicMotionComponent
              elementType="div"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              <DynamicMotionComponent elementType="div" variants={scaleIn}>
                <Card className="text-center border-t-4 border-t-primary hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <DynamicMotionComponent
                      elementType="div"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10"
                    >
                      <Users className="h-6 w-6 text-primary" />
                    </DynamicMotionComponent>
                    <div className="text-2xl font-bold">{project.teamSize}</div>
                    <div className="text-sm text-muted-foreground">
                      Team Members
                    </div>
                  </CardContent>
                </Card>
              </DynamicMotionComponent>

              <DynamicMotionComponent elementType="div" variants={scaleIn}>
                <Card className="text-center border-t-4 border-t-blue-500 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <DynamicMotionComponent
                      elementType="div"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-blue-500/10"
                    >
                      <Clock className="h-6 w-6 text-blue-500" />
                    </DynamicMotionComponent>
                    <div className="text-2xl font-bold">{project.duration}</div>
                    <div className="text-sm text-muted-foreground">
                      Duration
                    </div>
                  </CardContent>
                </Card>
              </DynamicMotionComponent>

            {project?.users &&  <DynamicMotionComponent elementType="div" variants={scaleIn}>
                <Card className="text-center border-t-4 border-t-green-500 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <DynamicMotionComponent
                      elementType="div"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-green-500/10"
                    >
                      <Users className="h-6 w-6 text-primary" />
                    </DynamicMotionComponent>
                    <div className="text-2xl font-bold">
                      {project.users}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Users
                    </div>
                  </CardContent>
                </Card>
              </DynamicMotionComponent>}

              <DynamicMotionComponent elementType="div" variants={scaleIn}>
                <Card className="text-center border-t-4 border-t-purple-500 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <DynamicMotionComponent
                      elementType="div"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-purple-500/10"
                    >
                      <Calendar className="h-6 w-6 text-purple-500" />
                    </DynamicMotionComponent>
                    <div className="text-2xl font-bold">{project.year}</div>
                    <div className="text-sm text-muted-foreground">Year</div>
                  </CardContent>
                </Card>
              </DynamicMotionComponent>
            </DynamicMotionComponent>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 relative">
          <FloatingElement
            className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-primary/5 blur-xl"
            xFactor={15}
            yFactor={20}
            duration={9}
          />
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* My Role & Responsibilities */}
                <DynamicMotionComponent
                  elementType="div"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Target className="h-4 w-4 text-primary" />
                    </div>
                    My Role & Responsibilities
                  </h2>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-8">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          {project.role}
                        </h3>
                        <p className="text-muted-foreground">
                          As the {project.role}, I was responsible for leading
                          key aspects of the project development.
                        </p>
                      </div>
                      <DynamicMotionComponent
                        elementType="div"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerChildren}
                        className="grid gap-3"
                      >
                        {project.responsibilities.map(
                          (responsibility, index) => (
                            <DynamicMotionComponent
                              elementType="div"
                              key={index}
                              variants={fadeInUp}
                              whileHover={{ x: 5 }}
                              className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300"
                            >
                              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-primary">
                                  {index + 1}
                                </span>
                              </div>
                              <span className="text-sm">{responsibility}</span>
                            </DynamicMotionComponent>
                          )
                        )}
                      </DynamicMotionComponent>
                    </CardContent>
                  </Card>
                </DynamicMotionComponent>

                {/* Challenges & Solutions */}
                {project.challenges && (
                  <DynamicMotionComponent
                    elementType="div"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <Lightbulb className="h-4 w-4 text-orange-500" />
                      </div>
                      Challenges & Solutions
                    </h2>
                    <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4">
                          <DynamicMotionComponent
                            elementType="div"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0"
                          >
                            <Lightbulb className="h-6 w-6 text-orange-500" />
                          </DynamicMotionComponent>
                          <div>
                            <h3 className="text-lg font-semibold mb-3">
                              Technical Challenges
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {project.challenges}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DynamicMotionComponent>
                )}

                {/* Outcomes & Impact */}
                {project.outcomes && (
                  <DynamicMotionComponent
                    elementType="div"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      </div>
                      Outcomes & Impact
                    </h2>
                    <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4">
                          <DynamicMotionComponent
                            elementType="div"
                            whileHover={{ scale: 1.1 }}
                            className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center shrink-0"
                          >
                            <TrendingUp className="h-6 w-6 text-green-500" />
                          </DynamicMotionComponent>
                          <div>
                            <h3 className="text-lg font-semibold mb-3">
                              Project Results
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {project.outcomes}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DynamicMotionComponent>
                )}
              </div>

              {/* Sidebar */}
              <DynamicMotionComponent
                elementType="div"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                {/* Technologies */}
                <Card className="sticky top-24 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Technologies Used
                    </h3>
                    <DynamicMotionComponent
                      elementType="div"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={staggerChildren}
                      className="grid grid-cols-2 gap-2"
                    >
                      {project.technologies.map((tech, index) => (
                        <DynamicMotionComponent
                          elementType="div"
                          key={index}
                          variants={scaleIn}
                        >
                          <Badge
                            variant="outline"
                            className="justify-center py-2 bg-primary/5 hover:bg-primary/10 transition-colors duration-300 w-full"
                          >
                            {tech}
                          </Badge>
                        </DynamicMotionComponent>
                      ))}
                    </DynamicMotionComponent>
                  </CardContent>
                </Card>

                {/* Project Links */}
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Project Links
                    </h3>
                    <div className="space-y-3">
                      {project.liveUrl && (
                        <DynamicMotionComponent
                          elementType="div"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            asChild
                            variant="outline"
                            className="w-full justify-start gap-2"
                          >
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </Link>
                          </Button>
                        </DynamicMotionComponent>
                      )}
                      {project.githubUrl && (
                        <DynamicMotionComponent
                          elementType="div"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            asChild
                            variant="outline"
                            className="w-full justify-start gap-2"
                          >
                            <Link
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4" />
                              Source Code
                            </Link>
                          </Button>
                        </DynamicMotionComponent>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Project Info */}
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Project Info</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Year</span>
                        <Badge variant="outline">{project.year}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">{project.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Team Size</span>
                        <span className="font-medium">
                          {project.teamSize} people
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">My Role</span>
                        <span className="font-medium">{project.role}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DynamicMotionComponent>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 bg-muted/30 relative overflow-hidden">
          <FloatingElement
            className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-primary/5 blur-xl"
            xFactor={20}
            yFactor={20}
            duration={10}
          />
          <div className="container">
            <DynamicMotionComponent
              elementType="div"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Related Projects</h2>
              <p className="text-muted-foreground">
                Explore more of my work and see how I tackle different
                challenges
              </p>
            </DynamicMotionComponent>
            <DynamicMotionComponent
              elementType="div"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ProjectCarousel />
            </DynamicMotionComponent>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container">
            <DynamicMotionComponent
              elementType="div"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">
                    Interested in Working Together?
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    I'm always excited to take on new challenges and collaborate
                    on innovative projects. Let's discuss how we can bring your
                    ideas to life.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <DynamicMotionComponent
                      elementType="div"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="lg" asChild>
                        <Link href="/#contact">Get In Touch</Link>
                      </Button>
                    </DynamicMotionComponent>
                  </div>
                </CardContent>
              </Card>
            </DynamicMotionComponent>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Andy Vo. All rights reserved.
            </p>
            <div className="flex gap-4">
              <DynamicMotionComponent
                elementType="div"
                whileHover={{ scale: 1.05 }}
              >
                <Link href="/#contact">
                  <Button variant="outline" size="sm">
                    Get In Touch
                  </Button>
                </Link>
              </DynamicMotionComponent>
              <DynamicMotionComponent
                elementType="div"
                whileHover={{ scale: 1.05 }}
              >
                <Link href="/">
                  <Button size="sm">Back to Portfolio</Button>
                </Link>
              </DynamicMotionComponent>
            </div>
          </div>
        </div>
      </footer>
    </ScrollToTop>
  );
}
