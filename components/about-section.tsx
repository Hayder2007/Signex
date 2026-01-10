"use client"

import { P2PFlowIcon } from "./icons/p2p-flow-icon"
import { useIsMobile } from "@/hooks/use-mobile"

export function AboutSection() {
  const isMobile = useIsMobile()

  return (
    <section id="about" className="bg-background py-12 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {isMobile ? (
          /* Mobile Layout - Stacked, compact, no large illustration */
          <div className="flex flex-col space-y-5">
            <h2 className="text-2xl font-bold text-foreground text-center">About Signex</h2>

            {/* Compact icon for mobile */}
            <div className="flex justify-center">
              <div className="h-20 w-20 text-accent">
                <P2PFlowIcon />
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed text-left">
              Signex is a secure, trustless platform for exchanging tokens &amp; NFTs through smart-contract escrow. 
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed text-justify">
              Swap token for token, token for NFTs, or NFTs for NFTs - all with full control over your assets.
            </p>

            <div className="flex justify-center pt-2">
              <a href="https://docs.signex.site">
                <button className="text-accent transition-smooth hover:text-blue-500 font-medium inline-flex items-center gap-1 text-sm">
                  Explore More →
                </button>
              </a>
            </div>
          </div>
        ) : (
          /* Desktop Layout - Original grid with large illustration */
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Visual */}
            <div className="order-2 flex justify-center lg:order-1">
              <div className="h-80 w-80 text-accent">
                <P2PFlowIcon />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 space-y-6 lg:order-2">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">About Signex</h2>

              <p className="text-pretty text-base text-muted-foreground leading-relaxed sm:text-lg">
                {
                  "Signex is a simple, secure, and trustless platform that lets anyone exchange tokens or NFTs through smart-contract escrow. There's no middleman, no KYC, and no risk — your assets only move when both sides deposit & confirm."
                }
              </p>

              <p className="text-pretty text-base text-muted-foreground leading-relaxed sm:text-lg">
                We built Signex to make peer-to-peer trading easy, fast, and reliable for everyone, whether you're
                swapping crypto for crypto, crypto for NFTs, or NFTs for NFTs. Our mission is to give users full control
                over their assets while making trading safe and transparent.
              </p>

              <div className="pt-4">
                <a href="https://docs.signex.site">
                  <button className="text-accent transition-smooth hover:text-blue-500 font-medium inline-flex items-center gap-2">
                    Explore More →
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
