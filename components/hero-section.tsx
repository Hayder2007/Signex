"use client"

import { P2PAnimatedIcon } from "./icons/p2p-animated-icon"

export function HeroSection() {
  const handleLearnMore = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative overflow-hidden bg-background py-20 sm:py-32 lg:py-40">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Trustless P2P Swap
            </h1>

            <p className="text-balance text-lg text-muted-foreground sm:text-xl">
              {"Signex lets you safely exchange tokens or NFTs between wallets via smart-contract escrow. No middleman. No risk. Funds move only when both sides deposit & confirm."}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row"><a href="https://app.signex.site">
              <button className="rounded-lg bg-accent px-8 py-3 font-medium text-primary transition-smooth hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background">
                Launch Signex
              </button></a>
              <button
                onClick={handleLearnMore}
                className="rounded-lg border-2 border-accent px-8 py-3 font-medium text-accent transition-smooth hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/50"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-96 w-full max-w-sm">
              <div className="animate-float absolute inset-0">
                <P2PAnimatedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
