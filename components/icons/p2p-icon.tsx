export function P2PIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      {/* Left Wallet */}
      <rect x="2" y="8" width="10" height="16" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="2" y="8" width="10" height="3" rx="1" fill="currentColor" />
      
      {/* Right Wallet */}
      <rect x="20" y="8" width="10" height="16" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="20" y="8" width="10" height="3" rx="1" fill="currentColor" />
      
      {/* Left Arrow */}
      <path d="M14 18L18 14M18 14H16M18 14V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Right Arrow */}
      <path d="M18 18L14 14M14 14H16M14 14V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
