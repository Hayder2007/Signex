"use client"

export function P2PAnimatedIcon() {
  return (
    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        {/* Gradient definitions for wallets */}
        <linearGradient id="walletGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="walletGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <style>{`
          @keyframes floatWallet1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(-10px, -8px) rotate(-2deg); }
            50% { transform: translate(-15px, 5px) rotate(-1deg); }
            75% { transform: translate(-8px, -5px) rotate(1deg); }
          }
          @keyframes floatWallet2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(10px, 8px) rotate(2deg); }
            50% { transform: translate(15px, -5px) rotate(1deg); }
            75% { transform: translate(8px, 5px) rotate(-1deg); }
          }
          
          @keyframes pulseGlow {
            0%, 100% { filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.6)); }
            50% { filter: drop-shadow(0 0 16px rgba(96, 165, 250, 0.9)); }
          }
          
          /* Updated token animations for true bidirectional exchange */
          @keyframes tokenFlowLeftToRight {
            0% { opacity: 0; offset-distance: 0%; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; offset-distance: 100%; }
          }
          
          @keyframes tokenFlowRightToLeft {
            0% { opacity: 0; offset-distance: 0%; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; offset-distance: 100%; }
          }
          
          @keyframes swapRotate {
            0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
            50% { transform: scale(1.15) rotate(180deg); opacity: 1; }
          }

          .wallet1 { animation: floatWallet1 4s ease-in-out infinite; }
          .wallet2 { animation: floatWallet2 4s ease-in-out infinite; }
          .glow-pulse { animation: pulseGlow 2s ease-in-out infinite; }
          .token-left-to-right { animation: tokenFlowLeftToRight 2.5s ease-in-out infinite; offset-path: path('M 130 200 Q 190 170, 250 200'); }
          .token-right-to-left { animation: tokenFlowRightToLeft 2.5s ease-in-out infinite; offset-path: path('M 370 200 Q 310 230, 250 200'); }
          .swap-icon { animation: swapRotate 3s ease-in-out infinite; }
        `}</style>
      </defs>

      {/* Left Wallet with gradient and glow */}
      <g className="wallet1 glow-pulse" style={{ transformOrigin: "85px 200px" }}>
        {/* Wallet shadow */}
        <rect x="35" y="145" width="100" height="110" rx="12" fill="#000000" opacity="0.15" filter="url(#glow)" />

        {/* Main wallet body */}
        <rect
          x="30"
          y="140"
          width="100"
          height="110"
          rx="12"
          fill="url(#walletGradient1)"
          stroke="#60a5fa"
          strokeWidth="2.5"
        />

        {/* Wallet flap */}
        <path
          d="M 35 140 Q 35 132 43 132 L 122 132 Q 130 132 130 140 L 130 160 L 30 160 L 30 145 Q 30 140 35 140 Z"
          fill="url(#walletGradient1)"
          stroke="#60a5fa"
          strokeWidth="2.5"
          opacity="0.8"
        />

        {/* Card details */}
        <line x1="45" y1="175" x2="115" y2="175" stroke="#ffffff" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
        <line x1="45" y1="190" x2="95" y2="190" stroke="#ffffff" strokeWidth="2" opacity="0.3" strokeLinecap="round" />

        {/* Coin/button detail */}
        <circle cx="115" cy="215" r="10" fill="#ffffff" opacity="0.3" />
        <circle cx="115" cy="215" r="6" fill="#60a5fa" />
      </g>

      {/* Right Wallet with gradient and glow */}
      <g className="wallet2 glow-pulse" style={{ transformOrigin: "415px 200px" }}>
        {/* Wallet shadow */}
        <rect x="365" y="145" width="100" height="110" rx="12" fill="#000000" opacity="0.15" filter="url(#glow)" />

        {/* Main wallet body */}
        <rect
          x="360"
          y="140"
          width="100"
          height="110"
          rx="12"
          fill="url(#walletGradient2)"
          stroke="#38bdf8"
          strokeWidth="2.5"
        />

        {/* Wallet flap */}
        <path
          d="M 365 140 Q 365 132 373 132 L 452 132 Q 460 132 460 140 L 460 160 L 360 160 L 360 145 Q 360 140 365 140 Z"
          fill="url(#walletGradient2)"
          stroke="#38bdf8"
          strokeWidth="2.5"
          opacity="0.8"
        />

        {/* Card details */}
        <line
          x1="375"
          y1="175"
          x2="445"
          y2="175"
          stroke="#ffffff"
          strokeWidth="2"
          opacity="0.4"
          strokeLinecap="round"
        />
        <line
          x1="375"
          y1="190"
          x2="425"
          y2="190"
          stroke="#ffffff"
          strokeWidth="2"
          opacity="0.3"
          strokeLinecap="round"
        />

        {/* Coin/button detail */}
        <circle cx="445" cy="215" r="10" fill="#ffffff" opacity="0.3" />
        <circle cx="445" cy="215" r="6" fill="#38bdf8" />
      </g>

      <g className="swap-icon" style={{ transformOrigin: "250px 200px" }}>
        {/* Outer ring */}
        <circle cx="250" cy="200" r="38" fill="#0f172a" stroke="#60a5fa" strokeWidth="2.5" opacity="0.95" />

        {/* Inner gradient circle */}
        <circle cx="250" cy="200" r="32" fill="url(#walletGradient1)" opacity="0.2" />

        {/* Curved double arrows forming swap symbol */}
        {/* Top-right arrow (clockwise) */}
        <path
          d="M 260 178 A 18 18 0 0 1 272 190"
          stroke="#60a5fa"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M 272 190 L 267 185 M 272 190 L 272 184" stroke="#60a5fa" strokeWidth="3.5" strokeLinecap="round" />

        {/* Bottom-left arrow (counter-clockwise) */}
        <path
          d="M 240 222 A 18 18 0 0 1 228 210"
          stroke="#38bdf8"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M 228 210 L 233 215 M 228 210 L 228 216" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />

        {/* Left arrow (going up-left) */}
        <path
          d="M 228 190 A 18 18 0 0 1 240 178"
          stroke="#60a5fa"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M 240 178 L 235 183 M 240 178 L 240 184" stroke="#60a5fa" strokeWidth="3.5" strokeLinecap="round" />

        {/* Right arrow (going down-right) */}
        <path
          d="M 272 210 A 18 18 0 0 1 260 222"
          stroke="#38bdf8"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M 260 222 L 265 217 M 260 222 L 260 216" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />

        {/* Center dot for emphasis */}
        <circle cx="250" cy="200" r="4" fill="#60a5fa" opacity="0.8" />
      </g>

      <g className="token-left-to-right">
        <circle cx="0" cy="0" r="10" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2.5" filter="url(#glow)" />
        <circle cx="0" cy="0" r="6" fill="#fef3c7" opacity="0.8" />
        <text x="0" y="3" fontSize="9" fill="#78350f" textAnchor="middle" fontWeight="bold">
          $
        </text>
      </g>

      <g className="token-right-to-left">
        <circle cx="0" cy="0" r="10" fill="#a78bfa" stroke="#8b5cf6" strokeWidth="2.5" filter="url(#glow)" />
        <circle cx="0" cy="0" r="6" fill="#e9d5ff" opacity="0.6" />
        <rect x="-3" y="-3" width="6" height="6" fill="#7c3aed" opacity="0.8" rx="1" />
      </g>
    </svg>
  )
}
