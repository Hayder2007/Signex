"use client"

import { WalletIcon } from "./icons/wallet-icon"
import { TradeIcon } from "./icons/trade-icon"
import { DepositIcon } from "./icons/deposit-icon"
import { ConfirmIcon } from "./icons/confirm-icon"
import { useIsMobile } from "@/hooks/use-mobile"

const steps = [
  {
    number: "1",
    title: "Connect Wallet",
    description: "Link your Web3 wallet securely",
    shortTitle: "Connect",
    icon: WalletIcon,
  },
  {
    number: "2",
    title: "Create Trade",
    description: "Set up your swap and send invite",
    shortTitle: "Create",
    icon: TradeIcon,
  },
  {
    number: "3",
    title: "Both Deposit",
    description: "Both parties lock their assets",
    shortTitle: "Deposit",
    icon: DepositIcon,
  },
  {
    number: "4",
    title: "Swap Executes",
    description: "Both confirm and swap completes",
    shortTitle: "Swap",
    icon: ConfirmIcon,
  },
]

export function HowItWorksSection() {
  const isMobile = useIsMobile()

  return (
    <section id="how" className="bg-background py-12 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12 text-center sm:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground sm:text-4xl">How It Works</h2>
          <p className="mt-2 md:mt-4 text-sm md:text-base text-muted-foreground">
            Four simple steps to trustless trading.
          </p>
        </div>

        {isMobile ? (
          <div className="flex flex-col items-center gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex flex-col items-center">
                  {/* Step card */}
                  <div className="flex items-center gap-4 bg-secondary/50 rounded-xl px-6 py-4 w-full max-w-[280px] border border-border/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 ring-2 ring-accent text-accent flex-shrink-0">
                      <Icon />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent font-bold">{step.number}.</span>
                      <span className="text-sm font-semibold text-foreground">{step.title}</span>
                    </div>
                  </div>

                  {/* Arrow connector between steps */}
                  {index < steps.length - 1 && (
                    <div className="py-2 text-accent/50">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          /* Desktop Layout - Original horizontal with connectors */
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative">
                  {/* Connector line - hidden on last item */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-4 top-12 hidden h-0.5 w-8 bg-accent/30 lg:block" />
                  )}

                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 ring-2 ring-accent text-accent">
                      <Icon />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
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
