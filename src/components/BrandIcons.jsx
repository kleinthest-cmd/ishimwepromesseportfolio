/**
 * Brand icons are not shipped with lucide-react anymore, so these two are
 * hand-drawn to match the rest of the icon set (24px grid, 2px stroke).
 */

export function InstagramIcon({ size = 24, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TelegramIcon({ size = 24, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M21.5 3.5 2.8 10.7c-.9.3-.9 1.5.1 1.7l4.7 1.2 1.8 5.4c.3.8 1.3 1 1.8.3l2.5-3 4.4 3.2c.7.5 1.6.1 1.8-.7l3-14.3c.2-.9-.7-1.6-1.4-1.3Z" />
      <path d="m7.6 13.6 10.7-6.9-8.6 8.3" />
    </svg>
  )
}
