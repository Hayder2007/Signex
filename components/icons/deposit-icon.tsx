export function DepositIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
    >
      {/* Box with arrow down */}
      <rect x="4" y="8" width="16" height="10" rx="1" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 4 L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 11 L12 14 L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
