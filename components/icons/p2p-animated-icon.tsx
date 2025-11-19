export function P2PAnimatedIcon() {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <defs>
        <style>{`
          @keyframes walletLeft {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-25px); }
          }
          @keyframes walletRight {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(25px); }
          }
          .wallet-left { animation: walletLeft 2.5s ease-in-out infinite; transform-origin: center; }
          .wallet-right { animation: walletRight 2.5s ease-in-out infinite; transform-origin: center; }
          @keyframes arrowLeft {
            0%, 100% { opacity: 0; transform: translateX(-10px); }
            40% { opacity: 0; }
            50% { opacity: 1; transform: translateX(15px); }
            60% { opacity: 0; }
            100% { opacity: 0; transform: translateX(-10px); }
          }
          @keyframes arrowRight {
            0%, 100% { opacity: 0; transform: translateX(10px); }
            40% { opacity: 0; }
            50% { opacity: 1; transform: translateX(-15px); }
            60% { opacity: 0; }
            100% { opacity: 0; transform: translateX(10px); }
          }
          .arrow-left { animation: arrowLeft 2.5s ease-in-out infinite; transform-origin: center; }
          .arrow-right { animation: arrowRight 2.5s ease-in-out infinite; transform-origin: center; }
        `}</style>
      </defs>

      {/* Left Wallet */}
      <g className="wallet-left">
        {/* Wallet body with gradient-like appearance */}
        <rect x="20" y="100" width="100" height="160" rx="16" fill="#60a5fa" opacity="0.15" stroke="#60a5fa" strokeWidth="2.5" />
        
        {/* Wallet flap/top */}
        <path d="M 20 116 Q 20 100 36 100 L 104 100 Q 120 100 120 116 L 120 140 L 20 140 Z" fill="#60a5fa" opacity="0.3" />
        
        {/* Card slots */}
        <rect x="32" y="125" width="76" height="8" rx="2" fill="#60a5fa" opacity="0.4" />
        <rect x="32" y="145" width="76" height="8" rx="2" fill="#60a5fa" opacity="0.3" />
        <rect x="32" y="165" width="76" height="8" rx="2" fill="#60a5fa" opacity="0.3" />
        
        {/* Coins indicator */}
        <circle cx="50" cy="215" r="6" fill="#60a5fa" opacity="0.5" />
        <circle cx="70" cy="220" r="5" fill="#60a5fa" opacity="0.4" />
        <circle cx="90" cy="215" r="6" fill="#60a5fa" opacity="0.5" />
      </g>

      {/* Right Wallet */}
      <g className="wallet-right">
        {/* Wallet body with gradient-like appearance */}
        <rect x="200" y="100" width="100" height="160" rx="16" fill="#60a5fa" opacity="0.15" stroke="#60a5fa" strokeWidth="2.5" />
        
        {/* Wallet flap/top */}
        <path d="M 200 116 Q 200 100 216 100 L 284 100 Q 300 100 300 116 L 300 140 L 200 140 Z" fill="#60a5fa" opacity="0.3" />
        
        {/* Card slots */}
        <rect x="212" y="125" width="76" height="8" rx="2" fill="#60a5fa" opacity="0.4" />
        <rect x="212" y="145" width="76" height="8" rx="2" fill="#60a5fa" opacity="0.3" />
        <rect x="212" y="165" width="76" height="8" rx="2" fill="#60a5fa" opacity="0.3" />
        
        {/* Coins indicator */}
        <circle cx="230" cy="215" r="6" fill="#60a5fa" opacity="0.5" />
        <circle cx="250" cy="220" r="5" fill="#60a5fa" opacity="0.4" />
        <circle cx="270" cy="215" r="6" fill="#60a5fa" opacity="0.5" />
      </g>

      {/* Left Arrow - moving right */}
      <g className="arrow-left">
        <line x1="125" y1="175" x2="160" y2="175" stroke="#60a5fa" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M162 175 L148 163 M162 175 L148 187" stroke="#60a5fa" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Right Arrow - moving left */}
      <g className="arrow-right">
        <line x1="195" y1="175" x2="160" y2="175" stroke="#60a5fa" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M158 175 L172 163 M158 175 L172 187" stroke="#60a5fa" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}
