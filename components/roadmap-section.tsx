"use client"

import { useIsMobile } from "@/hooks/use-mobile"

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Core Foundation",
    status: "completed",
    items: [
      "Frontend / branding / social channels setup",
      "Demo dApp live (internal invite-only)",
      "Deploy MVP smart contract on Base testnet",
      "Collect feedback + Community testing (trades, swaps, NFTs)",
    ],
    mobileItems: [
      "Frontend & branding ready",
      "Internal demo dApp live",
      "MVP on Base testnet",
      "Community feedback collected",
    ],
  },
  {
    phase: "Phase 2",
    title: "Public Launch",
    status: "in-progress",
    items: [
      "Public deployment on Base mainnet",
      "Open to all users (commission-free on Base)",
      "UI / UX improvements: timers, notifications, trade history",
      "Apply for Base ecosystem grant",
    ],
    mobileItems: ["Base mainnet deployment", "Commission-free for all", "UI/UX enhancements", "Base grant application"],
  },
  {
    phase: "Phase 3",
    title: "Multi-Chain",
    status: "planned",
    items: [
      "Multi-chain support: add 1–3 additional chains",
      "Expand asset types: more tokens, NFTs, cross-chain readiness",
      "Enhancements for liquidity & swap efficiency",
      "Security improvements & monitoring",
    ],
    mobileItems: ["Multi-chain expansion", "More tokens & NFTs", "Liquidity improvements", "Security upgrades"],
  },
  {
    phase: "Phase 4",
    title: "Expansion",
    status: "planned",
    items: [
      "Mobile app / responsive design for web & mobile",
      "Monetization: Small fees, premium features, highlighted trades",
      "Regional / local P2P support (fiat <> crypto)",
      "More features: partnerships, enhanced reputation & analytics",
    ],
    mobileItems: ["Mobile app launch", "Premium features", "Fiat <> crypto P2P", "Partnerships & analytics"],
  },
]

export function RoadmapSection() {
  const isMobile = useIsMobile()

  return (
    <section id="roadmap" className="bg-secondary py-12 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12 text-center sm:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground sm:text-4xl">Roadmap</h2>
          <p className="mt-2 md:mt-4 text-sm md:text-base text-muted-foreground">Building the future of P2P trading.</p>
        </div>

        {isMobile ? (
          <div className="space-y-4">
            {roadmapPhases.map((phaseData) => (
              <div key={phaseData.phase} className="rounded-xl border border-accent/20 bg-primary/50 p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-sm font-bold text-foreground">{phaseData.phase}</span>
                    <span className="text-xs text-accent ml-2">— {phaseData.title}</span>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      phaseData.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : phaseData.status === "in-progress"
                          ? "bg-blue-500/20 text-accent"
                          : "bg-muted/50 text-muted-foreground"
                    }`}
                  >
                    {phaseData.status === "completed"
                      ? "Done"
                      : phaseData.status === "in-progress"
                        ? "Active"
                        : "Planned"}
                  </span>
                </div>

                {/* All items with shortened text */}
                <div className="space-y-2">
                  {phaseData.mobileItems.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      <p className="text-xs text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Desktop Layout - Original grid cards */
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
                      phaseData.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : phaseData.status === "in-progress"
                          ? "bg-blue-500/20 text-accent"
                          : "bg-muted/50 text-muted-foreground"
                    }`}
                  >
                    {phaseData.status === "completed"
                      ? "Completed"
                      : phaseData.status === "in-progress"
                        ? "In Progress"
                        : "Planned"}
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
        )}
      </div>
    </section>
  )
}
