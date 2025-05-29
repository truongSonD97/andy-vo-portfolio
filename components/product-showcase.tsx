"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users } from "lucide-react";
import Link from "next/link";
import { productsData } from "@/data/product";
import { FloatingElement } from "./floating-element";
import { useEffect } from "react";
import { useState } from "react";
import { ProductCard } from "./ui/product-card";

export function ProductShowcase() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("products");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView =
          rect.top < window.innerHeight * 0.75 && rect.bottom >= 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Beta":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Coming Soon":
        return "bg-orange-500/10 text-orange-600 border-orange-500/20";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <FloatingElement
        className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-primary/5 blur-xl"
        xFactor={25}
        yFactor={15}
        duration={10}
      />
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Products
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Products I've Built
              </span>
            </h2>
            <p className="max-w-[700px] text-muted-foreground mx-auto">
              Discover the products I've created and launched, from SaaS
              platforms to developer tools. Each product represents innovation
              and real-world impact.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {productsData.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
