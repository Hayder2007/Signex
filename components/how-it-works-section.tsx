'use client'

import { WalletIcon } from './icons/wallet-icon'
import { TradeIcon } from './icons/trade-icon'
import { DepositIcon } from './icons/deposit-icon'
import { ConfirmIcon } from './icons/confirm-icon'

const steps = [
  {
    number: '1',
    title: 'Connect Wallet',
    description: 'Link your Web3 wallet securely',
    icon: WalletIcon,
  },
  {
    number: '2',
    title: 'Create Trade',
    description: 'Set up your swap and send invite',
    icon: TradeIcon,
  },
  {
    number: '3',
    title: 'Both Deposit',
    description: 'Both parties lock their assets',
    icon: DepositIcon,
  },
  {
    number: '4',
    title: 'Swap Executes',
    description: 'Both confirm and swap completes',
    icon: ConfirmIcon,
  },
]

export function HowItWorksSection() {
  return (
    <section id="how" className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Four simple steps to trustless trading.
          </p>
        </div>

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
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
