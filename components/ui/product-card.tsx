"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types/project";

export function ProductCard({ product }: { product: Project }) {

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
    <motion.div key={product.title} variants={cardVariants}>
    <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-500 group border-0 bg-gradient-to-br from-background via-background to-muted/20">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={
              product.image ||
              "/placeholder.svg?height=300&width=400"
            }
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <Badge
              className={`${getStatusColor(product.status)} border`}
            >
              {product.status}
            </Badge>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <Badge
              variant="destructive"
            >
              {product.category}
            </Badge>
          </div>

          {/* Product Name Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold mb-1">
              {product.title}
            </h3>
            <Badge variant="secondary">{product.year}</Badge>
            </div>
            
            <p className="text-white/80 text-sm">
              {product.shortDescription}
            </p>
          </div>
        </div>

        {/* Product Content */}
        <div className="p-6">
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {product.fullDescription}
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                {product.users}
              </span>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-4">
            {product.technologies
              .slice(0, 3)
              .map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="outline"
                  className="text-xs"
                >
                  {tech}
                </Badge>
              ))}
            {product.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{product.technologies.length - 3}
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
                <Link href={`/projects/${product.slug}`}>View Details</Link>
            </Button>
            {product.liveUrl && (
              <Button size="sm" className="px-3" asChild>
                <Link
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
  );
}
