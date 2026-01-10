"use client"

import { P2PAnimatedIcon } from "./icons/p2p-animated-icon"
import { useIsMobile, getSignexAppUrl } from "@/hooks/use-mobile"

export function HeroSection() {
  const isMobile = useIsMobile()

  const handleLearnMore = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background py-12 sm:py-20 md:py-32 lg:py-40 min-h-[90vh] sm:min-h-0"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {isMobile ? (
          <div className="flex flex-col items-center text-center pt-16 pb-12 space-y-12">
            {/* Title Section */}
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">Trustless P2P Swap</h1>
              <div className="h-1 w-16 mx-auto bg-gradient-to-r from-accent/50 via-accent to-accent/50 rounded-full" />
            </div>

            {/* Subtitle Section */}
            <div className="px-6 max-w-md space-y-12 pt-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                Safely trade tokens and NFTs peer-to-peer between wallets with no middleman risk.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-row gap-3 w-full justify-center">
                <a href={getSignexAppUrl(true)} className="flex-[1.5] max-w-[180px]">
                  <button className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-200 hover:bg-blue-500 hover:scale-105 shadow-lg shadow-accent/25">
                    Launch Signex
                  </button>
                </a>
                <button
                  onClick={handleLearnMore}
                  className="flex-1 max-w-[120px] rounded-lg border-2 border-accent/50 px-4 py-2 text-sm font-medium text-accent transition-all duration-200 hover:bg-accent/10 hover:border-accent"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="flex gap-2 opacity-40">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse [animation-delay:200ms]" />
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse [animation-delay:400ms]" />
            </div>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Trustless P2P Swap
              </h1>

              <p className="text-balance text-lg text-muted-foreground sm:text-xl">
                {
                  "Signex lets you safely exchange tokens or NFTs between wallets via smart-contract escrow. No middleman. No risk. Funds move only when both sides deposit & confirm."
                }
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={getSignexAppUrl(false)}>
                  <button className="rounded-lg bg-accent px-8 py-3 font-medium text-primary transition-smooth hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background">
                    Launch Signex
                  </button>
                </a>
                <button
                  onClick={handleLearnMore}
                  className="rounded-lg border-2 border-accent px-8 py-3 font-medium text-accent transition-smooth hover:bg-accent/10 hover:shadow-md hover:shadow-accent/30"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative h-96 w-full max-w-sm">
                <div className="animate-float absolute inset-0">
                  <P2PAnimatedIcon />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
