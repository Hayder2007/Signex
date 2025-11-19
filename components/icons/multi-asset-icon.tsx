export function MultiAssetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
    >
      {/* Token 1 */}
      <circle cx="8" cy="8" r="4" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      <text x="8" y="10" fontSize="6" fill="currentColor" textAnchor="middle" fontWeight="bold" opacity="0.8">T</text>

      {/* Token 2 */}
      <circle cx="16" cy="12" r="4" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      <text x="16" y="14" fontSize="6" fill="currentColor" textAnchor="middle" fontWeight="bold" opacity="0.8">N</text>

      {/* Token 3 */}
      <circle cx="12" cy="18" r="4" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      <text x="12" y="20" fontSize="6" fill="currentColor" textAnchor="middle" fontWeight="bold" opacity="0.8">F</text>

      {/* Connection lines */}
      <line x1="10" y1="10" x2="14" y2="11" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="15" y1="14" x2="13" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  )
}
