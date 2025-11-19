export function TrustlessIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
    >
      {/* Left wallet */}
      <rect x="2" y="6" width="8" height="12" rx="1" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      <line x1="2" y1="10" x2="10" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.5" />

      {/* Right wallet */}
      <rect x="14" y="6" width="8" height="12" rx="1" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      <line x1="14" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.5" />

      {/* Arrows */}
      <path d="M10.5 12 L13.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 11.5 L10.5 12 L11 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.5 12 L10.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 11.5 L13.5 12 L13 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
