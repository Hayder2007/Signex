'use client'

import { P2PFlowIcon } from './icons/p2p-flow-icon'

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Visual */}
          <div className="order-2 flex justify-center lg:order-1">
            <div className="h-80 w-80 text-accent">
              <P2PFlowIcon />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 space-y-6 lg:order-2">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              About Signex
            </h2>
            
            <p className="text-pretty text-base text-muted-foreground leading-relaxed sm:text-lg">
              {"Signex is a simple, secure, and trustless platform that lets anyone exchange tokens or NFTs through smart-contract escrow. There\'s no middleman, no KYC, and no risk — your assets only move when both sides deposit & confirm."}
            </p>

            <p className="text-pretty text-base text-muted-foreground leading-relaxed sm:text-lg">
              We built Signex to make peer-to-peer trading easy, fast, and reliable for everyone, whether you're swapping crypto for crypto, crypto for NFTs, or NFTs for NFTs. Our mission is to give users full control over their assets while making trading safe and transparent.
            </p>

            <div className="pt-4"><a href="https://exultant-background-1d4.notion.site/Signex-Full-Documentation-2b07f5420c3a80b69412cfafdfef9eb9">
              <button className="text-accent transition-smooth hover:text-blue-400 font-medium inline-flex items-center gap-2">
                Explore More →
              </button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
