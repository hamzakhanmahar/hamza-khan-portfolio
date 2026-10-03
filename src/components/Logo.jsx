/** HK monogram — same mark as the favicon. */
export default function Logo({ size = 36, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <rect x="1" y="1" width="62" height="62" rx="14" fill="#0a0a0b" stroke="currentColor" strokeOpacity=".22" strokeWidth="2" />
      <path d="M19 17v30M19 32h14M33 17v30" stroke="#f3f1ee" strokeWidth="5" strokeLinecap="square" />
      <path d="M33 32l13-15M36 29l11 18" stroke="#ff4d5a" strokeWidth="5" strokeLinecap="square" />
    </svg>
  )
}
