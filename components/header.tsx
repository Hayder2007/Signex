'use client'

import { useState } from 'react'
import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12">
            <Image
              src="/signex-logo.png"
              alt="Signex"
              width={48}
              height={48}
              priority
            />
          </div>
          <span className="text-xl font-semibold text-foreground">Signex</span>
        </div>
        
        <nav className="hidden gap-8 md:flex">
          <a href="#about" className="text-sm text-muted-foreground transition-smooth hover:text-accent">About</a>
          <a href="#features" className="text-sm text-muted-foreground transition-smooth hover:text-accent">Features</a>
          <a href="#how" className="text-sm text-muted-foreground transition-smooth hover:text-accent">How it Works</a>
          <a href="#roadmap" className="text-sm text-muted-foreground transition-smooth hover:text-accent">Roadmap</a>
          <a href="#footer" className="text-sm text-muted-foreground transition-smooth hover:text-accent">Docs</a>
        </nav>
<a href="https://app.signex.site">
        <button className="rounded-lg bg-accent px-6 py-2 text-sm font-medium text-primary transition-smooth hover:bg-blue-500">
          Launch Signex
        </button></a>
      </div>
    </header>
  )
}
