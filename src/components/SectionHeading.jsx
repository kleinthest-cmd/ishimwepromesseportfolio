export default function SectionHeading({ index, eyebrow, title, description, className = '' }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] font-medium tracking-widest text-accent-ink">
          {index}
        </span>
        <span className="h-px w-10 bg-accent/50" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-ink">
          {eyebrow}
        </span>
      </div>

      <h2 className="mt-5 max-w-3xl text-balance font-display text-3xl font-bold leading-[1.12] text-fg sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-fg-muted">
          {description}
        </p>
      ) : null}
    </div>
  )
}
