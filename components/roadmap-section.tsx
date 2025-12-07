'use client'

const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Core Foundation',
    status: 'in-progress',
    items: [
      'Frontend / branding / social channels setup',
      'Demo dApp live (internal invite-only)',
      'Deploy MVP smart contract on Base testnet',
      'Collect feedback + internal testing (trades, swaps, NFTs)',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Public Launch',
    status: 'planned',
    items: [
      'Public deployment on Base mainnet',
      'Open to all users (commission-free on Base)',
      'UI / UX improvements: timers, notifications, trade history',
      'Apply for Base ecosystem grant',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Multi-Chain & Ecosystem',
    status: 'planned',
    items: [
      'Multi-chain support: add 1–3 additional chains',
      'Expand asset types: more tokens, NFTs, cross-chain readiness',
      'Enhancements for liquidity & swap efficiency',
      'Security improvements & monitoring',
      
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Future Expansion',
    status: 'planned',
    items: [
      'Mobile app / responsive design for web & mobile',
      'Monetization: Small fees, premium features, highlighted trades',
      'Regional / local P2P support (fiat <> crypto)',
      'More features: partnerships, enhanced reputation & analytics',
    ],
  },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="bg-secondary py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Roadmap
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Building the future of peer-to-peer trading, phase by phase.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {roadmapPhases.map((phaseData) => (
            <div
              key={phaseData.phase}
              className="rounded-lg border border-accent/20 bg-primary/50 p-6 backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-primary/70"
            >
              {/* Phase header with title and status */}
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-foreground">{phaseData.phase}</h3>
                    <span className="text-sm font-semibold text-accent">{phaseData.title}</span>
                  </div>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap ml-2 ${
                    phaseData.status === 'in-progress'
                      ? 'bg-blue-500/20 text-accent'
                      : 'bg-muted/50 text-muted-foreground'
                  }`}
                >
                  {phaseData.status === 'in-progress' ? 'In Progress' : 'Planned'}
                </span>
              </div>

              {/* Phase items list */}
              <div className="space-y-3">
                {phaseData.items.map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
