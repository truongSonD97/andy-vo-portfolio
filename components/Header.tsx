import Link from "next/link";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { ThemeToggle } from "./mode-toggle";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="text-xl">Andy Vo</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Skills
            </Link>
            <Link
              href="#education"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Education
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Products
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Projects
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/data/cv.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex gap-2"
              >
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </Link>
            <Button size="sm" className="hidden md:flex">
              Contact Me
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
    )
}