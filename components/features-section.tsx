'use client'

import { TrustlessIcon } from './icons/trustless-icon'
import { FastIcon } from './icons/fast-icon'
import { MultiAssetIcon } from './icons/multi-asset-icon'

const features = [
  {
    icon: TrustlessIcon,
    title: 'Trustless P2P',
    description: 'Your assets are locked in a public smart contract until both parties confirm. No custody, no risk.',
  },
  {
    icon: FastIcon,
    title: 'Easy & Fast',
    description: 'Connect your wallet, create a trade, confirm. Done in a few clicks.',
  },
  {
    icon: MultiAssetIcon,
    title: 'Multi-Asset Support',
    description: 'Swap tokens for tokens, tokens for NFTs, or NFTs for NFTs—all in one platform.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-secondary py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Why Choose Signex
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            A platform built for trust, speed, and flexibility.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-background p-8 transition-smooth hover:border-accent hover:bg-background/50"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20">
                  <Icon />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
