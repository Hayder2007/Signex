"use client"
import Image from "next/image"
import type React from "react"
import { useState } from "react"
import { useIsMobile, getSignexAppUrl } from "@/hooks/use-mobile"

export function Header() {
  const isMobile = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLogoClick = () => {
    setMenuOpen(false)
    const heroSection = document.getElementById("hero")
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2 md:gap-3 transition-smooth hover:opacity-80"
        >
          <div className="h-9 w-9 md:h-12 md:w-12">
            <Image src="/signex-logo.png" alt="Signex" width={48} height={48} priority />
          </div>
          <span className="text-lg md:text-xl font-semibold text-foreground">Signex</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="text-sm text-muted-foreground transition-smooth hover:text-accent"
          >
            About
          </a>
          <a
            href="#features"
            onClick={(e) => handleNavClick(e, "features")}
            className="text-sm text-muted-foreground transition-smooth hover:text-accent"
          >
            Features
          </a>
          <a
            href="#how"
            onClick={(e) => handleNavClick(e, "how")}
            className="text-sm text-muted-foreground transition-smooth hover:text-accent"
          >
            How it Works
          </a>
          <a
            href="#roadmap"
            onClick={(e) => handleNavClick(e, "roadmap")}
            className="text-sm text-muted-foreground transition-smooth hover:text-accent"
          >
            Roadmap
          </a>
          <a
            href="#footer"
            onClick={(e) => handleNavClick(e, "footer")}
            className="text-sm text-muted-foreground transition-smooth hover:text-accent"
          >
            Docs
          </a>
        </nav>

        {/* Mobile Menu Button + Launch */}
        <div className="flex items-center gap-2">
          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>

          {/* Launch Button */}
          <a href={getSignexAppUrl(isMobile)}>
            <button className="rounded-lg bg-accent px-4 md:px-6 py-2 text-xs md:text-sm font-medium text-primary transition-smooth hover:bg-blue-500">
              {isMobile ? "Launch" : "Launch Signex"}
            </button>
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/98 backdrop-blur">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-base text-muted-foreground transition-smooth hover:text-accent py-2"
            >
              About
            </a>
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="text-base text-muted-foreground transition-smooth hover:text-accent py-2"
            >
              Features
            </a>
            <a
              href="#how"
              onClick={(e) => handleNavClick(e, "how")}
              className="text-base text-muted-foreground transition-smooth hover:text-accent py-2"
            >
              How it Works
            </a>
            <a
              href="#roadmap"
              onClick={(e) => handleNavClick(e, "roadmap")}
              className="text-base text-muted-foreground transition-smooth hover:text-accent py-2"
            >
              Roadmap
            </a>
            <a
              href="#footer"
              onClick={(e) => handleNavClick(e, "footer")}
              className="text-base text-muted-foreground transition-smooth hover:text-accent py-2"
            >
              Docs
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
