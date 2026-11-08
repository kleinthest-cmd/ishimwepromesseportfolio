const ITEMS = [
  'React.js',
  'Tailwind CSS',
  'JavaScript',
  'Node.js',
  'Network Administration',
  'REST APIs',
  'MySQL',
  'Linux',
  'IT Support',
  'UI Engineering',
]

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-accent-strong/40 bg-accent py-4 text-black">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1}>
            {ITEMS.map((item) => (
              <span
                key={`${group}-${item}`}
                className="flex items-center gap-6 whitespace-nowrap px-6 font-display text-[11px] font-bold uppercase tracking-[0.22em] sm:text-xs"
              >
                {item}
                <span className="text-black/40">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
