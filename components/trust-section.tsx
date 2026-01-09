"use client"

import { ShieldIcon } from "./icons/shield-icon"
import { LockIcon } from "./icons/lock-icon"
import { HandshakeIcon } from "./icons/handshake-icon"
import { useIsMobile } from "@/hooks/use-mobile"

const trustItems = [
  {
    icon: ShieldIcon,
    title: "No Middleman",
    description: "Trades happen through a public smart contract — Signex never holds your funds.",
    shortDesc: "Smart contract, not Signex",
  },
  {
    icon: LockIcon,
    title: "Wallet-to-Wallet Custody",
    description: "Your assets are managed via smart-contract escrow throughout the transaction — never held by Signex.",
    shortDesc: "Escrow-protected assets",
  },
  {
    icon: HandshakeIcon,
    title: "Mutual Confirmation",
    description: "Funds move only after both parties explicitly confirm the trade.",
    shortDesc: "Both confirm to execute",
  },
]

export function TrustSection() {
  const isMobile = useIsMobile()

  return (
    <section className="bg-background py-12 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12 text-center sm:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground sm:text-4xl">Trust & Security</h2>
          <p className="mt-2 md:mt-4 text-sm md:text-base text-muted-foreground">
            Your assets are always in your control.
          </p>
        </div>

        {isMobile ? (
          <div className="flex flex-col gap-4 px-2">
            {trustItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-secondary/50"
                >
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.shortDesc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          /* Desktop Layout - Original stacked cards */
          <div className="space-y-6">
            {trustItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-lg border border-border bg-secondary p-6 transition-smooth hover:border-accent"
                >
                  <div className="flex-shrink-0 text-accent">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
