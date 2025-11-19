export function P2PFlowIcon() {
  return (
    <svg
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      {/* Connection lines */}
      <path d="M 60 140 Q 140 100 220 140" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <path d="M 220 140 Q 140 180 60 140" stroke="currentColor" strokeWidth="2" opacity="0.3" />

      {/* Left wallet */}
      <g>
        <rect x="20" y="110" width="80" height="60" rx="8" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2" />
        <rect x="30" y="115" width="60" height="15" rx="4" fill="currentColor" opacity="0.2" />
        <circle cx="40" cy="130" r="2" fill="currentColor" />
        <circle cx="55" cy="130" r="2" fill="currentColor" />
        <circle cx="70" cy="130" r="2" fill="currentColor" />
      </g>

      {/* Right wallet */}
      <g>
        <rect x="180" y="110" width="80" height="60" rx="8" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2" />
        <rect x="190" y="115" width="60" height="15" rx="4" fill="currentColor" opacity="0.2" />
        <circle cx="200" cy="130" r="2" fill="currentColor" />
        <circle cx="215" cy="130" r="2" fill="currentColor" />
        <circle cx="230" cy="130" r="2" fill="currentColor" />
      </g>

      {/* Top arrow */}
      <g>
        <line x1="110" y1="120" x2="170" y2="120" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M165 115 L170 120 L165 125" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="140" y="108" fontSize="12" fill="currentColor" textAnchor="middle" opacity="0.6">confirm</text>
      </g>

      {/* Bottom arrow */}
      <g>
        <line x1="170" y1="160" x2="110" y2="160" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M115 155 L110 160 L115 165" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="140" y="175" fontSize="12" fill="currentColor" textAnchor="middle" opacity="0.6">swap</text>
      </g>

      {/* Center checkmark */}
      <g>
        <circle cx="140" cy="140" r="6" fill="currentColor" opacity="0.2" />
        <path d="M137 140 L139 142 L143 138" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}
