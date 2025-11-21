"use client"

export function P2PAnimatedIcon() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <style>{`
          @keyframes walletLeft {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-30px); }
          }
          @keyframes walletRight {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(30px); }
          }
          .wallet-left { animation: walletLeft 2.5s ease-in-out infinite; transform-origin: center; }
          .wallet-right { animation: walletRight 2.5s ease-in-out infinite; transform-origin: center; }
          @keyframes arrowLeft {
            0%, 100% { opacity: 0; transform: translateX(-15px); }
            40% { opacity: 0; }
            50% { opacity: 1; transform: translateX(15px); }
            60% { opacity: 0; }
            100% { opacity: 0; transform: translateX(-15px); }
          }
          @keyframes arrowRight {
            0%, 100% { opacity: 0; transform: translateX(15px); }
            40% { opacity: 0; }
            50% { opacity: 1; transform: translateX(-15px); }
            60% { opacity: 0; }
            100% { opacity: 0; transform: translateX(15px); }
          }
          .arrow-left { animation: arrowLeft 2.5s ease-in-out infinite; transform-origin: center; }
          .arrow-right { animation: arrowRight 2.5s ease-in-out infinite; transform-origin: center; }
        `}</style>
      </defs>

      {/* Left Wallet - Using actual wallet icon shape */}
      <g className="wallet-left">
        {/* Main wallet body */}
        <rect x="30" y="80" width="100" height="140" rx="14" fill="none" stroke="#60a5fa" strokeWidth="3" />

        {/* Top rounded header */}
        <path
          d="M 40 80 Q 40 70 50 70 L 120 70 Q 130 80 130 90 L 130 100 L 30 100 Q 30 85 40 80"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Card lines */}
        <line
          x1="45"
          y1="110"
          x2="115"
          y2="110"
          stroke="#60a5fa"
          strokeWidth="2.5"
          opacity="0.7"
          strokeLinecap="round"
        />
        <line
          x1="45"
          y1="130"
          x2="115"
          y2="130"
          stroke="#60a5fa"
          strokeWidth="2.5"
          opacity="0.5"
          strokeLinecap="round"
        />
        <line
          x1="45"
          y1="150"
          x2="115"
          y2="150"
          stroke="#60a5fa"
          strokeWidth="2.5"
          opacity="0.5"
          strokeLinecap="round"
        />

        {/* Lock/coin indicator on right */}
        <circle cx="118" cy="180" r="8" fill="#60a5fa" />
      </g>

      {/* Right Wallet - Using actual wallet icon shape */}
      <g className="wallet-right">
        {/* Main wallet body */}
        <rect x="270" y="80" width="100" height="140" rx="14" fill="none" stroke="#60a5fa" strokeWidth="3" />

        {/* Top rounded header */}
        <path
          d="M 280 80 Q 280 70 290 70 L 360 70 Q 370 80 370 90 L 370 100 L 270 100 Q 270 85 280 80"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Card lines */}
        <line
          x1="285"
          y1="110"
          x2="355"
          y2="110"
          stroke="#60a5fa"
          strokeWidth="2.5"
          opacity="0.7"
          strokeLinecap="round"
        />
        <line
          x1="285"
          y1="130"
          x2="355"
          y2="130"
          stroke="#60a5fa"
          strokeWidth="2.5"
          opacity="0.5"
          strokeLinecap="round"
        />
        <line
          x1="285"
          y1="150"
          x2="355"
          y2="150"
          stroke="#60a5fa"
          strokeWidth="2.5"
          opacity="0.5"
          strokeLinecap="round"
        />

        {/* Lock/coin indicator on right */}
        <circle cx="358" cy="180" r="8" fill="#60a5fa" />
      </g>

      {/* Left Arrow - moving right */}
      <g className="arrow-left">
        <line x1="145" y1="150" x2="180" y2="150" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" />
        <path
          d="M185 150 L170 135 M185 150 L170 165"
          stroke="#60a5fa"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Right Arrow - moving left */}
      <g className="arrow-right">
        <line x1="255" y1="150" x2="220" y2="150" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" />
        <path
          d="M215 150 L230 135 M215 150 L230 165"
          stroke="#60a5fa"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
