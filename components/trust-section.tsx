'use client'

import { ShieldIcon } from './icons/shield-icon'
import { LockIcon } from './icons/lock-icon'
import { HandshakeIcon } from './icons/handshake-icon'

export function TrustSection() {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Trust & Security
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Your assets are always in your control.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4 rounded-lg border border-border bg-secondary p-6 transition-smooth hover:border-accent">
            <div className="flex-shrink-0 text-accent">
              <ShieldIcon />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">No Middleman</h3>
              <p className="mt-1 text-muted-foreground">
                {"Trades happen through a public smart contract — Signex never holds your funds."}
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-lg border border-border bg-secondary p-6 transition-smooth hover:border-accent">
            <div className="flex-shrink-0 text-accent">
              <LockIcon />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Wallet-to-Wallet Custody</h3>
              <p className="mt-1 text-muted-foreground">
                {"Your assets are managed via smart-contract escrow throughout the transaction — never held by Signex."}
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-lg border border-border bg-secondary p-6 transition-smooth hover:border-accent">
            <div className="flex-shrink-0 text-accent">
              <HandshakeIcon />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Mutual Confirmation</h3>
              <p className="mt-1 text-muted-foreground">
                Funds move only after both parties explicitly confirm the trade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
