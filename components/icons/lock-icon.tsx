export function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
    >
      {/* Lock shape */}
      <rect x="5" y="10" width="14" height="10" rx="2" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 10 V6 A4 4 0 0 1 16 6 V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="15" r="1" fill="currentColor" />
    </svg>
  )
}
